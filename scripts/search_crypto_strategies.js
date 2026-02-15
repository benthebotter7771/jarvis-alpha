const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=fast+crypto+money+making+2026+strategies+DePIN+AI+SocialFi');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/root/.openclaw/workspace/media/crypto_strategies_2026.png' });
  
  const results = await page.$$eval('div.g', els => els.map(el => el.innerText).slice(0, 5));
  console.log('RESULTS:' + JSON.stringify(results));
  
  await browser.close();
})();