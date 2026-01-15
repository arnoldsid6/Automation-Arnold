import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByText('Don\'t have an account?').click();
  await page.locator('.login-wrapper-footer-text', { hasText:"Don't have an account? "}).click();
  //await page.getByText('Don\'t have an account?').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'enter your number' }).click();
  await page.getByRole('combobox').selectOption('1: Doctor');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('textbox', { name: 'Passsword' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.locator('.col-md-1').click();
  await page.getByRole('button', { name: 'Register' }).click();
});