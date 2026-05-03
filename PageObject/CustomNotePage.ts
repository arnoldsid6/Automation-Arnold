import { expect, Locator, Page } from "@playwright/test";

export class CustomNotePage {
  readonly page: Page;

  // Navigation
  readonly customNoteNavItem: Locator;

  // Add Custom Note dropdown
  readonly addCustomNoteBtn: Locator;
  readonly dragAndDropOption: Locator;

  // Note Info form
  readonly groupSelect: Locator;
  readonly noteNameInput: Locator;
  readonly printableSelect: Locator;
  readonly paperSizeSelect: Locator;

  // Layout / Component builder
  readonly addComponentBtn: Locator;
  readonly componentRowToggle: Locator;
  readonly componentAddOption: Locator;
  readonly saveNoteBtn: Locator;

  // Component sidebar
  readonly checkboxComponent: Locator;

  // Checkbox config panel
  readonly auditTrailNameInput: Locator;
  readonly multipleDataCheckbox: Locator;
  readonly addOptionsInput: Locator;
  readonly addOptionBtn: Locator;
  readonly componentSaveBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.customNoteNavItem     = page.locator('[id="/custom-note"]');
    this.addCustomNoteBtn      = page.locator('#divadd');
    this.dragAndDropOption     = page.getByText('Drag and Drop', { exact: true });

    this.groupSelect           = page.locator('select[name="noteinfoGroups"]');
    this.noteNameInput         = page.locator('[id="Note Name-noteName"]');
    this.printableSelect       = page.locator('select[name="noteInfoPrintable"]');
    this.paperSizeSelect       = page.locator('select[name="noteinfoPaperSize"]');

    this.addComponentBtn       = page.locator('#divaddcomp');
    this.componentRowToggle    = page.locator('button.btn-warning.dropdown-toggle');
    this.componentAddOption    = page.locator('a[ng-click="vm.addComponent(data)"]');
    this.saveNoteBtn           = page.locator('button[ng-click="vm.save()"]').first();

    this.checkboxComponent     = page.locator('.customnotelistcomponent li').filter({ hasText: /^Checkbox$/ });

    this.auditTrailNameInput   = page.locator('[id="Name for Audit trail-propNameForAudit"]');
    this.multipleDataCheckbox  = page.locator('#isMultipleData');
    this.addOptionsInput       = page.locator('[id="Add Options-propinputOption"]');
    this.addOptionBtn          = page.locator('[id="Add Options-propinputOption"]').locator('xpath=..').getByText('Add', { exact: true });
    this.componentSaveBtn      = page.locator('#btn');
  }

  async navigateToCustomNotes() {
    await this.customNoteNavItem.click();
    await this.page.waitForTimeout(2000);
  }

  async openDragAndDropForm() {
    await this.addCustomNoteBtn.click();
    await this.page.waitForTimeout(500);
    await this.dragAndDropOption.click();
    await this.page.waitForURL(/add-edit-custom-note-drag-and-drop/, { timeout: 10000 });
    await this.page.waitForTimeout(2000);
  }

  async fillNoteInfo(group: string, noteName: string, printable: string, paperSizeValue: string) {
    await this.groupSelect.selectOption({ value: group });
    await this.noteNameInput.fill(noteName);
    await this.printableSelect.selectOption({ value: printable });
    await this.paperSizeSelect.selectOption({ value: paperSizeValue });
    await this.page.waitForTimeout(500);
  }

  async openComponentPanel() {
    await this.addComponentBtn.click();
    await this.page.waitForTimeout(1500);
    await this.componentRowToggle.click();
    await this.page.waitForTimeout(500);
    await this.componentAddOption.dispatchEvent('click');
    // Wait for the component list sidebar to be visible before returning
    await this.page.locator('.customnotelistcomponent').waitFor({ state: 'visible', timeout: 10000 });
  }

  async configureCheckbox(auditTrailName: string, items: string[]) {
    // Select Checkbox from component sidebar
    await this.checkboxComponent.click();
    await this.page.waitForTimeout(1000);

    // Fill Audit trail name
    await this.auditTrailNameInput.fill(auditTrailName);

    // Enable Multiple data — the Add Options input only renders after this is checked
    await this.multipleDataCheckbox.check();
    await this.addOptionsInput.waitFor({ state: 'visible', timeout: 10000 });

    // Add each item by typing then clicking the "Add" button
    for (const item of items) {
      await this.addOptionsInput.fill(item);
      await this.addOptionBtn.dispatchEvent('click');
      await this.page.waitForTimeout(300);
    }

    // Click the Add / Save button in the component modal
    await this.componentSaveBtn.click();
    await this.page.waitForTimeout(2000);
  }

  async saveNote() {
    await this.saveNoteBtn.click();
    await this.page.waitForTimeout(2000);
  }
}
