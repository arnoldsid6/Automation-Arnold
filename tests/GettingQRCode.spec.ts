import {test, expect} from "@playwright/test"

test('QR Code QMEUP Test', async ({page}) =>
{

 

    await page.goto('http://localhost:9096/kiosk/KiE5HYy4QJp6uicaa/ge2FYeedx5Buow6rP/');
    await page.getByRole('button', {name: 'Services'}).click();
    //await page.goto("http://localhost:9096/kiosk/KiE5HYy4QJp6uicaa/ge2FYeedx5Buow6rP/services");
    await page.getByRole('button', {name: 'Internal Medicine'}).click();
    await page.getByText("DEPARTMENT IS NOT AVAILABLE").isVisible
if (await page.getByText("DEPARTMENT IS NOT AVAILABLE").count() > 0) 
{
    await page.goto("http://localhost:9096/settings/departments")
    await page.getByRole('button', {name: "I'm a Doctor"}).click();
    await expect(page.getByRole('textbox', {name: 'Username or Email'})).toBeEnabled();
    await page.getByRole('textbox', { name: 'Username or Email' }).fill('arnold66@mailinator.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('abcdE123');
    await page.getByRole('button', {name: 'Sign-in' }).click(); 
    await page.getByRole('link', { name: 'Settings' }).click();
    await page.getByText('Department Module', { exact: true }).click();
    await page.getByText('Departments', { exact: true }).click();
    await page.getByText('INTERNAL MEDICINE', { exact: true }).click();
   await page.getByRole('row', { name: /INTERNAL MEDICINE/ }).getByRole('button').click();
   await page.getByRole('menuitem', {name: 'Settings'}).click();
   await page.locator('div:nth-child(10) > div > div > input').click();
   await page.getByRole('button', { name: 'CLOSE'}).click();
   await page.getByRole('link', { name: 'kiosk' }).click();
      const [kioskPage] = await Promise.all([page.context().waitForEvent('page'),page.getByTitle('Open Kiosk On New Window').click(),]);
  await kioskPage.waitForLoadState();
    await kioskPage.bringToFront(); // optional
    await kioskPage.getByRole('button', { name: 'SERVICES' }).click();
     await kioskPage.getByRole('button', {name: 'Internal Medicine'}).click();
     await kioskPage.getByRole('button', {name: 'Queue Me Up'}).click();
await kioskPage.getByRole('button', {name: 'No, Skip This'}).click();

   //await page.getByTitle('Open Kiosk On New Window').click();

} else {
    await page.getByRole('button', {name: 'Queue Me Up'}).click();
    await page.getByRole('button', {name: 'No, Skip This'}).click();
    
}

/*await page.getByRole('button', {name: 'Queue Me Up'}).click();
await page.getByRole('button', {name: 'No, Skip This'}).click();
*/


});