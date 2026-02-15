const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://clawhub.ai/');
  await page.waitForTimeout(5000); // Wait for potential JS load
  await page.screenshot({ path: '/root/.openclaw/workspace/media/clawhub_latest.png' });
  
  const content = await page.evaluate(() => document.body.innerText);
  console.log('CONTENT_START');
  console.log(content.substring(0, 2000));
  console.log('CONTENT_END');
  
  await browser.close();
})();