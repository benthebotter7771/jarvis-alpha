const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.reddit.com/r/CryptoCurrency/search/?q=make+money+2026&restrict_sr=1&t=year');
  await page.waitForTimeout(3000); // Wait for results
  await page.screenshot({ path: '/root/business/reddit_crypto.png' });
  
  const titles = await page.$$eval('a[slot="full-post-link"]', links => links.slice(0, 5).map(l => l.innerText));
  console.log('TITLES:' + JSON.stringify(titles));
  
  await browser.close();
})();