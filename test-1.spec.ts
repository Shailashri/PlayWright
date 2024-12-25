import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=ecommerce+playground&oq=ecommerce+playground&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTEwNzUzajBqMqgCALACAQ&sourceid=chrome&ie=UTF-8');
  await page.getByRole('button', { name: 'Godkänn alla' }).click();
  await page.getByRole('link', { name: 'LambdaTest eCommerce' }).click();
  await page.getByRole('link', { name: 'LambdaTest eCommerce' }).click();
  await page.getByRole('link', { name: 'LambdaTest eCommerce' }).click();
  await page.getByText('By creating an account you').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('jhgfdds');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('89066');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
});