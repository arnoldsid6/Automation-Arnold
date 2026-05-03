import { test } from "@playwright/test";
import { PageObjectManager } from "../../../PageManager/PageObjectManager";

test("Login as Nurse and Open IP Case Sheet", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const loginPage = pom.LoginPageLocators();
  const visits = pom.visitsLocators();

  // Login as nurse — redirects directly to EHR visits module
  await loginPage.loginHeadNurse();
  await page.waitForURL(/localhost:8084.*visits/, { timeout: 15000 });
  await page.waitForTimeout(3000);

  // Filter to Beginning of Time > Confirm > All Status > Ellipsis > Add Forms > IP Case Sheet
  await visits.openIPCaseSheet();
});
