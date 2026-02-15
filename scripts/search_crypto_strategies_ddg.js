const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://duckduckgo.com/?q=fast+crypto+money+making+2026+strategies+DePIN+AI+SocialFi&ia=web');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: '/root/.openclaw/workspace/media/crypto_strategies_2026_ddg.png' });
  
  const results = await page.$$eval('article', els => els.map(el => el.innerText).slice(0, 5));
  console.log('RESULTS:' + JSON.stringify(results));
  
  await browser.close();
})();