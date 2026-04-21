import { test, expect} from "@playwright/test";
import { PageObjectManager } from '../../../PageManager/PageObjectManager';

test('EHR Login Test', async ({ page }) => {

    const pagemanager = new PageObjectManager(page);
    const loginPage = pagemanager.LoginPageLocators();
    const reception = pagemanager.ReceptionLocators();

    
       await test.step("Login as Doctor", async () => {
        await loginPage.loginMainDoctor();
      });

    
    await reception.receptioModule.click();
    await reception.patientEllipsis.getByRole('link').click();
    await reception.assignDoctor.first().click();
    await reception.acceptPatientBtn.click();
    
});