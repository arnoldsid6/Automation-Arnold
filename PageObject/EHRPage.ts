import { Locator, Page } from "@playwright/test";

export class EHRPage {
  readonly page: Page;
  readonly appsDropdown: Locator;
  readonly ehrLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.appsDropdown = page.locator('#lnkApps');
    this.ehrLink = page.locator('#ehr');
  }

  async navigateToEHR() {
    await this.appsDropdown.click();
    await this.ehrLink.click();
  }
}
