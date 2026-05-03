import { test, expect } from "@playwright/test";
import { PageObjectManager } from "../PageManager/PageObjectManager";

test("Login and Navigate to EHR", async ({ page }) => {
  const pom = new PageObjectManager(page);
  const loginPage = pom.LoginPageLocators();
  const ehrPage = pom.EHRPageLocators();

  await loginPage.loginAdmin();
  await expect(page).toHaveURL(/main\.html/);

  await ehrPage.navigateToEHR();

  await page.waitForURL(/localhost:8084/, { timeout: 10000 });
  await expect(page).toHaveURL(/localhost:8084/);
});
