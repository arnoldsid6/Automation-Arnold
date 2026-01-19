import { test, expect} from "@playwright/test";
//import { Register } from "../PageObject/PracticalExamRegistration";
//import { WelcomeLogin } from "../PageObject/WelcomePage";
//import { OrderingMain } from "../PageObject/Ordering"
import { Registration } from "../PageManager/loginpage"

test('PracticalExam', async ({ page }) => {

    const AddToCart = page.getByRole('button', { name: 'Add to Cart' }).first();
 
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
//await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/auth/login');

/*
await new Register(page).clickRegisterButton();
await new Register(page).FillFirstname();
await new Register(page).FillLastname();
await new Register(page).FillEmail();
await new Register(page).FillPhonenumber();
await new Register(page).chooseOccupation();
await new Register(page).ChooseGender();
await new Register(page).FillPassword();
await new Register(page).FillConfirmPassword();
await new Register(page).Check18years();
await new Register(page).SubmitButton();
await new Register(page).BackTologin();
*/

// Login

await new Registration(page).WelcomeLogin().UserName();
await new Registration(page).WelcomeLogin().UserPassword();
await new Registration(page).WelcomeLogin().LoginBtn();

//Order
await page.waitForTimeout(1000);
await page.getByRole('button', { name: 'View' }).nth(2).click();
await expect(AddToCart).toBeVisible();
await expect(AddToCart).toBeEnabled();
await page.waitForTimeout(1000);
await page.getByRole('button', { name: 'Add to Cart' }).first().click();
await page.waitForTimeout(1000);
await page.locator('.continue', { hasText: 'Continue Shopping' }).click();
await page.waitForTimeout(1000);
await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
await page.waitForTimeout(1000);
await new Registration(page).OrderingMain().cart();
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Checkout'}).click();
await page.getByRole('textbox').first().fill('3542 2131 9292 4493');
await page.getByRole('combobox').nth(0).selectOption('04');
await page.getByRole('combobox').nth(1).selectOption('20');
await page.getByRole('textbox').nth(1).fill('123');;
await page.getByRole('textbox').nth(2).fill('Arno Nos');
await page.getByRole('textbox', { name: 'Select Country' }).type('ph', {delay: 3000});;
await page.getByRole('button', { name: /Philippines/ }).click();
await page.getByText('Place Order').click();
await page.locator('.btn.btn-primary.mt-3.mb-3').click();
await page.locator('.btn.btn-custom', { hasText: 'ORDERS' }).click();
await page.locator('.btn.btn-primary.col-md-2.offset-md-4', { hasText: 'Go Back to Shop' }).click();
await page.locator('.btn.btn-custom', { hasText: 'Sign Out' }).click();


/*
const download1Promise = page.waitForEvent('download');
    const download1 = await download1Promise;
    */
});
