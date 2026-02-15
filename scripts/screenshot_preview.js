const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1000 });
  await page.goto('http://localhost:8083/jarvis_alpha_landing.html');
  await page.waitForTimeout(2000); // Allow styles to load
  await page.screenshot({ path: '/root/.openclaw/workspace/media/jarvis_alpha_preview.png' });
  await browser.close();
})();