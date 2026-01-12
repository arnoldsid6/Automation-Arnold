import { test, expect} from "@playwright/test";

test('EHR Login Test', async ({ page }) => 
    
    { 
const username = page.locator('#username')
const password = page.locator('#password')
const LoginBtn = page.locator('#loginFormSubmitButton')
const Dropdown = page.locator('#lnkApps')

    await page.goto("http://localhost:8083/app/index/index.html#/login");
    await expect(username).toBeEnabled();
    await username.fill('mdpalanca');
    await expect(password).toBeEnabled();
    await password.fill('abcdE@123');
    await expect(LoginBtn).toBeEnabled();
    await LoginBtn.click();

    
   // await expect(Dropdown).toBeVisible();
   // await Dropdown.click();
    //await expect(page.locator('#ehr')).toBeEnabled();
    //await page.locator('#ehr').click();
    await page.locator('[id="/central-reception"]').click();
    await page.getByRole('row').nth(1).getByRole('link').click();
    await page.locator('[id="assignDoc-1"]').first().click();
    await page.locator('[id="btnAcceptPatient"]').click();
    
});