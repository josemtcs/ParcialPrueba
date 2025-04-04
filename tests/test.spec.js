const { test, expect } = require('@playwright/test');

test('E-commerce checkout flow', async ({ page }) => {
  
  await page.goto('https://www.demoblaze.com');

  
  await page.click('a:has-text("Samsung galaxy s6")');


  await page.click('text=Add to cart');
  await page.waitForTimeout(1000); 

 
  await page.click('#cartur');
  const productInCart = await page.isVisible(':has-text("Nokia lumia 1520")');
  expect(productInCart).toBeTruthy();


  await page.click('text=Delete');

  
  const cartEmpty = await page.isVisible('text=Total: $0');
  expect(cartEmpty).toBeTruthy();
});