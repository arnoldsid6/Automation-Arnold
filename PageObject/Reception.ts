import { Locator, Page } from "@playwright/test";

export class Reception {
readonly page: Page;
readonly receptioModule: Locator;
readonly patientEllipsis: Locator;
readonly assignDoctor: Locator;
readonly acceptPatientBtn: Locator;

 constructor(page: Page) {
    this.page = page;
    this.receptioModule = page.locator('[id="/central-reception"]');
    this.patientEllipsis = page.getByRole('row').nth(1);
    this.assignDoctor = page.locator('[id="assignDoc-1"]').first();
    this.acceptPatientBtn = page.locator('[id="btnAcceptPatient"]');
 }


}