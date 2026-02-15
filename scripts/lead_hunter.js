const { chromium } = require('playwright');
const fs = require('fs');

async function huntLeads() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const keywords = ["airdrop", "testnet", "passive income", "free crypto", "monad", "berachain", "make money", "passive", "crypto for beginners", "zero budget"];
    const subreddits = ["CryptoCurrency", "airdrops", "crypto_moons", "solana", "Bitcoin", "CryptoMarkets", "PassiveIncome"];
    
    for (const sub of subreddits) {
        console.log(`Hunting for leads on r/${sub}...`);
        try {
            await page.goto(`https://www.reddit.com/r/${sub}/new/`, { waitUntil: 'networkidle', timeout: 60000 });
            await page.waitForTimeout(5000);
            
            const subLeads = await page.evaluate((keywords) => {
                const posts = Array.from(document.querySelectorAll('shreddit-post'));
                return posts.map(post => ({
                    title: post.getAttribute('post-title'),
                    author: post.getAttribute('author'),
                    url: 'https://www.reddit.com' + post.getAttribute('content-href'),
                    subreddit: window.location.pathname.split('/')[2]
                })).filter(post => 
                    post.title && keywords.some(k => post.title.toLowerCase().includes(k))
                );
            }, keywords);
            
            console.log(`Found ${subLeads.length} leads in r/${sub}.`);
            
            if (subLeads.length > 0) {
                const timestamp = new Date().toISOString();
                const leadData = subLeads.map(l => ({ ...l, found_at: timestamp }));
                
                let existingLeads = [];
                if (fs.existsSync('/root/business/marketing/leads.json')) {
                    existingLeads = JSON.parse(fs.readFileSync('/root/business/marketing/leads.json'));
                }
                fs.writeFileSync('/root/business/marketing/leads.json', JSON.stringify([...existingLeads, ...leadData], null, 4));
            }
        } catch (e) {
            console.log(`Error scanning r/${sub}: ${e.message}`);
        }
    }
    
    await browser.close();
}

huntLeads();
