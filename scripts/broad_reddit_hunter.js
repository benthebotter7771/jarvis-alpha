const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Broad search on Reddit
    const query = 'airdrop free';
    console.log(`Searching Reddit for: ${query}`);
    await page.goto(`https://www.reddit.com/search/?q=${encodeURIComponent(query)}&sort=new`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(5000);
    const content = await page.content();
    fs.writeFileSync('/root/business/scripts/reddit_debug.html', content);
    await page.screenshot({ path: '/root/.openclaw/workspace/media/reddit_search_debug.png' });
    
    const results = await page.evaluate(() => {
        const posts = Array.from(document.querySelectorAll('shreddit-post'));
        return posts.map(post => ({
            title: post.getAttribute('post-title'),
            author: post.getAttribute('author'),
            url: 'https://www.reddit.com' + post.getAttribute('content-href'),
            subreddit: post.getAttribute('subreddit-prefixed-name') || 'r/unknown'
        })).slice(0, 10);
    });
    
    console.log(`Found ${results.length} results.`);
    
    if (results.length > 0) {
        const timestamp = new Date().toISOString();
        const leadData = results.map(l => ({ ...l, found_at: timestamp }));
        let existingLeads = JSON.parse(fs.readFileSync('/root/business/marketing/leads.json'));
        fs.writeFileSync('/root/business/marketing/leads.json', JSON.stringify([...existingLeads, ...leadData], null, 4));
    }
    
    await browser.close();
})();