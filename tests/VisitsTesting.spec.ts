import { test, expect} from "@playwright/test";
import { timeStamp } from "node:console";

test('Visit Test', async ({ page }) => 
    
    { 
const username = page.locator('#username')
const password = page.locator('#password')
const LoginBtn = page.locator('#loginFormSubmitButton')
//const allBtn = page.locator('div.btn-group.summary-status label', { hasText: 'All' });

    await page.goto("http://localhost:8083/app/index/index.html#/login");
    await expect(username).toBeEnabled();
    await username.fill('mdpalanca');
    await expect(password).toBeEnabled();
    await password.fill('abcdE@123');
    await expect(LoginBtn).toBeEnabled();
    await LoginBtn.click();

    await page.waitForTimeout(5000);
    //await allBtn.scrollIntoViewIfNeeded();
    //await allBtn.click();
    //await page.locator('small#all').locator('..').click({ force: true }); 
    await page.locator('label:has(#rdoFilterPatientAll)').click();
    await page.waitForTimeout(3000);
    await page.locator('[id="afullname0"]').click();
    await expect(page.getByRole('button',{ name: 'Add Note'})).toBeEnabled();
    await page.getByRole('button', { name: 'Add Note' }).click();
    //await page.locator('[id="selectAppt-0"]').click();
    await page.locator('#selectAppt-0').click();
    await expect(page.getByRole('textbox', {name: 'Type note group or note description to search',})).toBeVisible();
    await page.getByRole('textbox', {name: 'Type note group or note description to search',}).fill('General SOAP');

    

    
    //await page.getByRole('button', { name: 'Add Note' }).click();

    });