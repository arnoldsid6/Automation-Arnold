import { test } from "@playwright/test";
import { PageObjectManager } from "../../../PageManager/PageObjectManager";

test("Create Custom Note with Checkbox Component", async ({ page }) => {
  test.setTimeout(120000);

  const pom = new PageObjectManager(page);
  const loginPage = pom.LoginPageLocators();
  const customNote = pom.CustomNoteLocators();

  // Login as admin and navigate to EHR
  await loginPage.loginAdmin();
  await page.waitForURL(/localhost:8083/, { timeout: 15000 });
  await page.locator('#lnkApps').click();
  await page.locator('#ehr').click();
  await page.waitForURL(/localhost:8084/, { timeout: 20000 });

  // Go to Custom Notes
  await customNote.navigateToCustomNotes();

  // Open Drag and Drop form
  await customNote.openDragAndDropForm();

  const randomNum = Math.floor(Math.random() * 90000) + 10000;
  const noteName = `V3 Custom Note From Automation ${randomNum}`;

  // Fill Note Info
  await customNote.fillNoteInfo(
    'string:Default',
    noteName,
    'boolean:true',
    'string:A4'
  );

  // Add Component → Add → Checkbox
  await customNote.openComponentPanel();
  await customNote.configureCheckbox('Checkbox1', ['1', '2']);

  // Save the custom note
  await customNote.saveNote();

  await page.pause();
});
