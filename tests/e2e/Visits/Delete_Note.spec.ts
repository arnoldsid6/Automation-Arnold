import { test, expect} from "@playwright/test";
import { PageObjectManager } from '../../../PageManager/PageObjectManager';


 test.describe("Delete Note", () => {
    test("Doctor Add Note", async ({ page }) => {
    const pagemanager = new PageObjectManager(page);
    const loginPage = pagemanager.LoginPageLocators();
    const visits = pagemanager.visitsLocators();
    

       await test.step("Login as Doctor", async () => {
        await loginPage.loginMainDoctor();
      });

      await test.step("Visit Date Filter", async () => {
        await visits.VisitDate();
      });

      await test.step("Open Patient Chart and Delete Note", async () => {
        await visits.deletePatientNote();
      });

      await page.pause();
    });
  });