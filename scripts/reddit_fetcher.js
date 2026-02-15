const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Fetching r/CryptoCurrency...');
  await page.goto('https://www.reddit.com/r/CryptoCurrency/new/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);
  
  const posts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('shreddit-post')).map(post => ({
      title: post.getAttribute('post-title'),
      url: 'https://www.reddit.com' + post.getAttribute('content-href')
    })).slice(0, 10);
  });
  
  console.log('REDDIT_POSTS:' + JSON.stringify(posts));
  
  // Try to find specific airdrop mentions
  await page.goto('https://www.reddit.com/r/airdrops/new/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(5000);
  const airdrops = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('shreddit-post')).map(post => ({
      title: post.getAttribute('post-title'),
      url: 'https://www.reddit.com' + post.getAttribute('content-href')
    })).slice(0, 10);
  });
  console.log('AIRDROP_POSTS:' + JSON.stringify(airdrops));

  await browser.close();
})();