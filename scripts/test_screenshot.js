const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://cointelegraph.com/');
  await page.screenshot({ path: '/root/business/crypto_news.png' });
  await browser.close();
  console.log('Screenshot saved to /root/business/crypto_news.png');
})();