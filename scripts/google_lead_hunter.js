const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Searching Google for recent Reddit/Forum discussions about earning crypto with $0
  console.log('Searching Google for direct leads...');
  const query = 'site:reddit.com "how to make money" crypto "0 budget" airdrop';
  await page.goto(`https://www.google.com/search?q=${encodeURIComponent(query)}&tbs=qdr:d`); // Last 24 hours
  await page.waitForTimeout(5000);
  await page.screenshot({ path: '/root/.openclaw/workspace/media/google_search_leads.png' });
  
  const googleLeads = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('div.g')).map(el => {
        const title = el.querySelector('h3')?.innerText;
        const url = el.querySelector('a')?.href;
        return { title, url, subreddit: 'Google/Reddit', found_at: new Date().toISOString() };
    }).filter(l => l.title && l.url);
  });
  
  console.log(`Found ${googleLeads.length} leads on Google.`);
  
  if (googleLeads.length > 0) {
    let existingLeads = [];
    if (fs.existsSync('/root/business/marketing/leads.json')) {
        existingLeads = JSON.parse(fs.readFileSync('/root/business/marketing/leads.json'));
    }
    fs.writeFileSync('/root/business/marketing/leads.json', JSON.stringify([...existingLeads, ...googleLeads], null, 4));
  }
  
  await browser.close();
})();