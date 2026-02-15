const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Researching high-conversion landing page structures for 2026 AI services
  console.log('Researching 2026 marketing trends...');
  await page.goto('https://duckduckgo.com/?q=high+conversion+landing+page+trends+2026+AI+crypto+newsletter&ia=web');
  await page.waitForTimeout(4000);
  const marketingTrends = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('article')).map(el => el.innerText).slice(0, 5);
  });
  console.log('MARKETING_TRENDS:' + JSON.stringify(marketingTrends));

  // Researching automated lead gen tactics for crypto on X/Twitter/Reddit in 2026
  await page.goto('https://duckduckgo.com/?q=automated+lead+generation+crypto+reddit+twitter+2026+tactics&ia=web');
  await page.waitForTimeout(4000);
  const leadGenTactics = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('article')).map(el => el.innerText).slice(0, 5);
  });
  console.log('LEAD_GEN_TACTICS:' + JSON.stringify(leadGenTactics));

  await browser.close();
})();