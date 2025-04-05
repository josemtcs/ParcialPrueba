const { test, expect } = require('@playwright/test');

test('Automate checkout flow on Demoblaze', async ({ page }) => {
  

  await page.goto('https://www.demoblaze.com');

  
  await page.click('a:has-text("Samsung galaxy s6")');

 
  await page.click('text=Add to cart');
  await page.waitForTimeout(1000); 


  await page.click('#cartur');

  
  await page.waitForSelector('td:has-text("Samsung galaxy s6")'); // 
  const productInCart = await page.isVisible('td:has-text("Samsung galaxy s6")'); 
  

  await page.click('text=Delete');
  
  const cartEmpty = await page.isVisible('text=Total: $0');
  
});