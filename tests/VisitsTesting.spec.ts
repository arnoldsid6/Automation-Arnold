import { test, expect} from "@playwright/test";
import { timeStamp } from "node:console";

test('Visit Test', async ({ page }) => 
    
    { 
const username = page.locator('#username')
const password = page.locator('#password')
const LoginBtn = page.locator('#loginFormSubmitButton')
//const allBtn = page.locator('div.btn-group.summary-status label', { hasText: 'All' });
const notevisible = expect(await page.getByRole('heading', { name: /General SOAP Note/ }).isVisible);
const note = await page.getByRole('heading', { name: /General SOAP Note/ });

const input = page.locator('#txtMedicineName-autoComplete');

const modal = page.locator('#yes-no-modal');
let modalVisible = false;

const modalnew = page.locator('.modal.in:has(form#yes-no-modal), .modal.show:has(form#yes-no-modal)');

    await page.goto("http://localhost:8083/app/index/index.html#/login");
    await expect(username).toBeEnabled();
    await username.fill('mdpalanca');
    await expect(password).toBeEnabled();
    await password.fill('abcdE@123');
    await expect(LoginBtn).toBeEnabled();
    await LoginBtn.click();

    await page.waitForTimeout(5000);
    await page.locator('label:has(#rdoFilterPatientAll)').click();
    await page.waitForTimeout(3000);
    await page.locator('[id="afullname0"]').click();
    await page.waitForTimeout(5000);

    if (await note.count() > 0) {
     await note.click();  
     //await expect(page.locator('#yes-no-modal')).toBeVisible({timeout: 5000});
}   else {
    await expect(page.getByRole('button',{ name: 'Add Note'})).toBeVisible();
    await page.getByRole('button', { name: 'Add Note' }).click();
    await page.locator('#selectAppt-0').click();
    await page.getByRole('textbox', {name: 'Type note group or note description to search',}).fill('General SOAP');
    await page.locator('text=Default').locator('..').locator('text=General Soap Note').click();
    await page.locator('#save').click(); 
}


 try {
  await expect(modalnew).toBeVisible({ timeout: 5000 });
  await modalnew.locator('#btnYes').click();
  await expect(modalnew).toBeHidden({ timeout: 5000 });
} catch {}


    await page.getByRole('textbox', {name: 'Write a Chief Complaint ...'}).fill('Sample chief complaint');
    await page.getByRole('textbox', {name: 'Write a History of Present Illness ...'}).fill('sample history');

    //Drug History
    await page.locator('#addMedicalHistory').click();
    //await expect(page.locator('#addMedicalHistory').isEnabled);
    await page.locator('#txtMedicineName-autoComplete').click();
    await page.locator('#txtMedicineName-autoComplete').fill('');
    await page.locator('#txtMedicineName-autoComplete').click();
    await page.locator('#txtMedicineName-autoComplete').type('100', {delay: 50});
    await page.locator('div.ac-container ul.ac-menu li.ac-menu-item a.fastclickable').filter({ hasText: '100 1' }).click();
    await page.getByRole('button', {name: 'Save'}).click();

    //Surgical History
    await page.locator('#addSurgicalHistory').click();
    await page.locator('#txtProcedureSuggest-autoComplete').click();
    await page.locator('#txtProcedureSuggest-autoComplete').fill('');
    await page.locator('#txtProcedureSuggest-autoComplete').type('delay', {delay: 50});
    await page.locator('div.ac-container ul.ac-menu li.ac-menu-item a.fastclickable').filter({hasText: 'DELAYED CRANIAL'}).click();
    await page.locator('#btn').filter({hasText: 'Save'}).click();
    await page.locator('#save').filter({hasText: 'Save'}).click();
    //
})