const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    console.log('Searching for tokens with Telegram links on DexScreener...');
    await page.goto('https://dexscreener.com/solana?rankBy=volume&order=desc');
    await page.waitForTimeout(5000);
    
    const tokens = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('a.ds-dex-table-row'));
        return rows.map(row => {
            const name = row.querySelector('.ds-dex-table-row-base-token-name')?.innerText;
            const symbol = row.querySelector('.ds-dex-table-row-base-token-symbol')?.innerText;
            const url = row.href;
            return { name, symbol, url };
        }).slice(0, 5);
    });
    
    console.log(`Found ${tokens.length} hot tokens.`);
    
    for (const token of tokens) {
        console.log(`Checking token: ${token.name}`);
        await page.goto(token.url);
        await page.waitForTimeout(3000);
        
        const socials = await page.evaluate(() => {
            const links = Array.from(document.querySelectorAll('a[href*="t.me"], a[href*="twitter.com"], a[href*="x.com"]'));
            return links.map(l => l.href);
        });
        
        token.socials = socials;
        console.log(`Socials for ${token.name}: ${socials.length}`);
    }
    
    fs.writeFileSync('/root/business/marketing/token_leads.json', JSON.stringify(tokens, null, 4));
    
    await browser.close();
})();