import { test } from "@playwright/test";
import { PageObjectManager } from "../../../PageManager/PageObjectManager";

test("Transfer Patient to Another Doctor", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const loginPage = pom.LoginPageLocators();
  const visits = pom.visitsLocators();

  // Login as nurse — redirects directly to EHR visits module
  await loginPage.loginHeadNurse();
  await page.waitForURL(/localhost:8084.*visits/, { timeout: 15000 });
  await page.waitForTimeout(3000);

  // Set date filter to Beginning of Time and confirm
  await visits.visitDateFilter.selectOption({ label: 'Beginning of Time' });
  await visits.beginConfirmBtn.click();
  await page.waitForTimeout(2000);

  // Set status filter to All
  await visits.filterToAll.click();
  await page.waitForTimeout(1500);

  // Transfer first patient to alternate doctor and validate toast
  await visits.transferToAnotherDoctor();
});
