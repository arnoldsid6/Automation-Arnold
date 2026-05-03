import { expect, Locator, Page } from "@playwright/test";

export class Visits {
readonly page: Page;
readonly visitDateFilter: Locator;
   readonly confirmModal: Locator;
   readonly beginConfirmBtn: Locator;
   readonly visitAddNoteBtn: Locator;
   readonly favNote: Locator;
   readonly chckBox: Locator;
   readonly searchNote: Locator;
   readonly v1Note: Locator;
   readonly noteSaveBtn: Locator;
   readonly savedNoteToastMessage: Locator;
   readonly deleteNote: Locator;
   readonly filterToAll: Locator;
   readonly firstEllipsis: Locator;
   readonly ellipsisDeleteBtn: Locator;
   readonly deleteNoteReason: Locator;
   readonly deletenoteValdiationMsg: Locator;
   // IP Case Sheet
   readonly patientRow: Locator;
   readonly patientEllipsisBtn: Locator;
   readonly addFormsOption: Locator;
   readonly ipCaseSheetOption: Locator;

   // Transfer to Another Doctor
   readonly transferOption: Locator;
   readonly doctorSearchInput: Locator;
   readonly transferToastMessage: Locator;

   //Update Status
   readonly patientStatusBtn: Locator;
   readonly completedStatusBtn: Locator;
   readonly dispositionField: Locator;
   readonly outpatientResults: Locator;
   readonly initialImpressionField: Locator;
   readonly dischargeDiagnosis: Locator;
   readonly updateStatus: Locator;
   readonly filterToInProgress: Locator;
   readonly completedStatusValidationMsg: Locator;

 constructor(page: Page) {
    this.page = page;
    this.visitDateFilter = page.locator('#standard');
    this.confirmModal = page.locator('#yes-no-modal');
    this.beginConfirmBtn = page.locator('#btnYes')
    this.visitAddNoteBtn = page.locator('#addNote0'); 
    this.chckBox = page.locator('#chkbxFavNote2');
    this.searchNote = page.getByRole('textbox', {name:'Type note group or note description to search',});
    this.noteSaveBtn = page.locator('#save');
    this.savedNoteToastMessage = page.locator('#toast-container .toast-message');
    this.deleteNote = page.locator('#afullname0');

    //Status Filter
    this.filterToAll = page.locator('label:has(#rdoFilterPatientAll)');
    this.filterToInProgress = page.locator('label:has(#rdoFilterPatientInProgress)');

    //Favcorite Note
    this.favNote = page.locator('#favNote2');

    //V1 Note
    this.v1Note = page.getByText('OUT PATIENT HEALTH RECORD DRPJGMRMC');

    //Delete Note
    this.firstEllipsis = page.locator('div.option.dropdown button.dropdown-toggle').first();
    this.ellipsisDeleteBtn = page.locator('#note-delete-0');
    this.deleteNoteReason = page.getByRole('textbox', {name:'Write your reason...',});
    this.deletenoteValdiationMsg = page.locator('#toast-container .toast');

    // IP Case Sheet
    this.patientRow = page.locator('tr.patient-row, .visit-row, tbody tr').first();
    this.patientEllipsisBtn = page.locator('.btn.action-mobile.fastclickable').first();
    this.addFormsOption = page.getByText('ADD FORMS', { exact: true });
    this.ipCaseSheetOption = page.getByText('IP Case Sheet');

    // Transfer to Another Doctor
    this.transferOption = page.getByText('Transfer to another doctor', { exact: true });
    this.doctorSearchInput = page.locator('[id="Search Doctor-searchDoctor"]');
    this.transferToastMessage = page.locator('#toast-container .toast-message');

    //From Inprogress to Completed status
    this.patientStatusBtn = page.locator('a.btn.btn-sm.btn-default.dropdown-toggle').first();
    this.completedStatusBtn = page.locator('ul.dropdown-menu >> span:has-text("Completed")').first();
    this.dispositionField = page.locator('#dispositions');
    this.outpatientResults = page.locator('#admissionResultsId');
    this.initialImpressionField = page.locator('#initialImpressions');
    this.dischargeDiagnosis = page.locator('#dischargeDiagnosis');
    this.updateStatus = page.locator('#btnUpdate');
    this.completedStatusValidationMsg = page.locator('#toast-container .toast-message');



 }
     async VisitDate() {
     await this.page.waitForTimeout(3000);
     await this.filterToInProgress.click();
     await expect(this.visitDateFilter).toBeVisible();
     await this.visitDateFilter.click();
     await this.page.waitForTimeout(2000);
     await this.visitDateFilter.selectOption({value: '13'});
     await expect(this.confirmModal).toBeVisible();
     await this.beginConfirmBtn.click();
     
   }
   async VisitAddV1Note() {
     await this.visitAddNoteBtn.click();
     await this.favNote.click();
   }

   async searchAndAddNote() {
     await this.visitAddNoteBtn.click();
     await this.searchNote.fill('out pati');
     await this.v1Note.click();
     await this.noteSaveBtn.click();
     await expect(this.savedNoteToastMessage).toBeVisible();
     await expect(this.savedNoteToastMessage).toHaveText('Notes successfully saved');
     
   }

   async deletePatientNote() {
     await this.deleteNote.click();
     await this.firstEllipsis.click({ force: true });
     await this.ellipsisDeleteBtn.click();
     await this.deleteNoteReason.fill('Test automation delete note');
     await this.beginConfirmBtn.click();
     await expect(this.deletenoteValdiationMsg).toBeVisible();

   }

   async transferToAnotherDoctor() {
     // Read assigned doctor from the first patient row before opening modal
     const firstRowText = await this.page.locator('tbody tr').first().innerText();
     const doctorMatch = firstRowText.match(/☒\s+([^\n|]+)/);
     const currentDoctor = doctorMatch ? doctorMatch[1].trim() : '';
     const searchTerm = currentDoctor.toLowerCase().includes('mark palan') ? 'valazar' : 'mark';

     // Open action modal via ellipsis
     await this.page.locator('.btn.action-mobile.fastclickable').first().dispatchEvent('click');
     await this.page.waitForTimeout(1500);

     // Click Transfer to Another Doctor
     await this.transferOption.dispatchEvent('click');
     await this.page.waitForTimeout(2000);

     // Search for the alternate doctor
     await this.doctorSearchInput.fill(searchTerm);
     await this.page.waitForTimeout(2000);

     // Click the matching doctor row in the transfer modal results table
     await this.page.locator('[ng-repeat="doc in vm.doctorsCopy"]')
       .filter({ hasText: new RegExp(searchTerm, 'i') })
       .click();

     // Validate toast message
     await expect(this.transferToastMessage).toBeVisible({ timeout: 8000 });
   }

   async openIPCaseSheet() {
     // Set date filter to Beginning of Time
     await this.visitDateFilter.selectOption({ label: 'Beginning of Time' });
     await expect(this.confirmModal).toBeVisible();
     await this.beginConfirmBtn.click();

     // Set status filter to All
     await this.filterToAll.click();
     await this.page.waitForTimeout(1500);

     // Open action modal via ellipsis button
     await this.page.locator('.btn.action-mobile.fastclickable').first().dispatchEvent('click');
     await this.page.waitForTimeout(1500);

     // Navigate to Add Forms > IP Case Sheet
     await this.addFormsOption.click();
     await this.page.waitForTimeout(1500);
     await this.ipCaseSheetOption.click();
   }

   async changePatientStatus() {
     await this.patientStatusBtn.click();
     await this.completedStatusBtn.click();
     await this.dispositionField.selectOption('Recovered');
     await this.outpatientResults.selectOption('Improved');
     await this.initialImpressionField.fill('Initial impression text');
     await this.dischargeDiagnosis.fill('Discharge diagnosis text');
    await this.updateStatus.click();
    await expect(this.completedStatusValidationMsg).toBeVisible();
    await expect(this.completedStatusValidationMsg).toHaveText('Successfully Updated');
   }
}