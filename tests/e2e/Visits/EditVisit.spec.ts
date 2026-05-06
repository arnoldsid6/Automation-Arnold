import { test } from "@playwright/test";
import { PageObjectManager } from "../../../PageManager/PageObjectManager";

test("Edit Visit", async ({ page }) => {
  test.setTimeout(90000);

  const pom = new PageObjectManager(page);
  const loginPage = pom.LoginPageLocators();
  const visits = pom.visitsLocators();

  await loginPage.loginHeadNurse();
  await page.waitForURL(/localhost:8084.*visits/, { timeout: 15000 });
  await page.waitForTimeout(3000);

  await visits.visitDateFilter.selectOption({ label: 'Beginning of Time' });
  await visits.beginConfirmBtn.click();
  await page.waitForTimeout(2000);

  await visits.editVisit();

  await page.pause();
});
