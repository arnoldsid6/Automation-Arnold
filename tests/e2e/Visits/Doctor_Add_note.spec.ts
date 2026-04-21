import { test, expect } from "@playwright/test";
import { PageObjectManager } from '../../../PageManager/PageObjectManager';


  test.describe("Doctor Add Note", () => {
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
      
      await test.step("Visit Add Note", async () => {
        await visits.searchAndAddNote();
      });
      


    });
  });