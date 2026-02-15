const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Search for 2026 top airdrops and socialfi opportunities
  const query = 'top crypto airdrops 2026 socialfi opportunities high potential';
  await page.goto(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&ia=web`);
  await page.waitForTimeout(4000);
  
  const results = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('article')).map(el => {
      const title = el.querySelector('h2')?.innerText;
      const snippet = el.querySelector('div[data-testid="result-snippet"]')?.innerText;
      const link = el.querySelector('a')?.href;
      return { title, snippet, link };
    }).slice(0, 6);
  });
  
  console.log('AIRDROP_RESULTS:' + JSON.stringify(results));
  
  // Also check for AI Agent / Sniper Bot trends
  await page.goto(`https://duckduckgo.com/?q=top+solana+trading+bots+2026+api+for+developers&ia=web`);
  await page.waitForTimeout(4000);
  
  const bots = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('article')).map(el => el.innerText).slice(0, 4);
  });
  
  console.log('BOT_RESULTS:' + JSON.stringify(bots));
  
  await browser.close();
})();