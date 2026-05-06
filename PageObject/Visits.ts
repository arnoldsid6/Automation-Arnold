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

   // View Chart
   readonly viewChartOption: Locator;

   // Edit Patient Profile
   readonly editProfileOption: Locator;
   readonly placeOfBirthInput: Locator;
   readonly nationalityInput: Locator;
   readonly bloodTypeSelect: Locator;
   readonly saveProfileBtn: Locator;
   readonly profileSavedToast: Locator;

   // Edit Visit
   readonly editVisitOption: Locator;
   readonly visitTypeModeSelect: Locator;
   readonly visitTypeNewSelect: Locator;
   readonly departmentVisitSelect: Locator;
   readonly designationInput: Locator;
   readonly hospitalizationPlanSelect: Locator;
   readonly membersSelect: Locator;
   readonly chiefComplaintTextarea: Locator;
   readonly guardianInput: Locator;
   readonly impressionTextarea: Locator;
   readonly remarksTextarea: Locator;
   readonly investigatorInput: Locator;
   readonly isCovid19Select: Locator;
   readonly saveVisitBtn: Locator;
   readonly visitSavedToast: Locator;

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

    // View Chart
    this.viewChartOption = page.getByText('View Chart', { exact: true });

    // Edit Visit
    this.editVisitOption           = page.getByText('Edit Visit', { exact: true });
    this.visitTypeModeSelect       = page.locator('select[name="visitType"]').first();
    this.visitTypeNewSelect        = page.locator('select[name="visitType"]').nth(1);
    this.departmentVisitSelect     = page.locator('select[name="selDepartment"]');
    this.designationInput          = page.locator('#designation-autoComplete');
    this.hospitalizationPlanSelect = page.locator('select[name="hosPlan"]');
    this.membersSelect             = page.locator('select[name="member"]');
    this.chiefComplaintTextarea    = page.locator('[id="Chief Complaint-chiefComplaint"]');
    this.guardianInput             = page.locator('[id="Guardian-guardian"]');
    this.impressionTextarea        = page.locator('[id="Impression-txtimpression"]');
    this.remarksTextarea           = page.locator('[id="Remarks-txtvisitRemarks"]');
    this.investigatorInput         = page.locator('input[name="user"][id="investigator"]');
    this.isCovid19Select           = page.locator('select[name="covid19Type"]');
    this.saveVisitBtn              = page.locator('#btnSave');
    this.visitSavedToast           = page.locator('#toast-container .toast-message');

    // Edit Patient Profile
    this.editProfileOption  = page.getByText('Edit Profile', { exact: true });
    this.placeOfBirthInput  = page.getByRole('textbox', { name: 'Place of Birth' });
    this.nationalityInput   = page.getByRole('textbox', { name: 'Nationality' });
    this.bloodTypeSelect    = page.getByRole('combobox', { name: 'Blood Type' });
    this.saveProfileBtn     = page.locator('#btnSavePatient');
    this.profileSavedToast  = page.locator('#toast-container .toast-message');

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

   async editVisit() {
     // Open ellipsis for first patient
     await this.page.locator('.btn.action-mobile.fastclickable').first().dispatchEvent('click');
     await this.page.waitForTimeout(1500);
     await this.editVisitOption.dispatchEvent('click');
     await this.page.waitForTimeout(2000);

     // Visit Type mode (Ambulatory / Stretcher / etc.) — randomly
     const modeCount = await this.visitTypeModeSelect.locator('option').count();
     await this.visitTypeModeSelect.selectOption({ index: Math.floor(Math.random() * (modeCount - 1)) + 1 });

     // Visit Type (New / Follow-Up) — randomly
     const newCount = await this.visitTypeNewSelect.locator('option').count();
     await this.visitTypeNewSelect.selectOption({ index: Math.floor(Math.random() * (newCount - 1)) + 1 });

     // Department — randomly
     const deptCount = await this.departmentVisitSelect.locator('option').count();
     await this.departmentVisitSelect.selectOption({ index: Math.floor(Math.random() * (deptCount - 1)) + 1 });

     // Designation — random text
     await this.designationInput.fill('QA Automation Designation');

     // Hospitalization Plan — randomly
     const hospCount = await this.hospitalizationPlanSelect.locator('option').count();
     await this.hospitalizationPlanSelect.selectOption({ index: Math.floor(Math.random() * (hospCount - 1)) + 1 });

     // Members — randomly
     const memberCount = await this.membersSelect.locator('option').count();
     await this.membersSelect.selectOption({ index: Math.floor(Math.random() * (memberCount - 1)) + 1 });

     // Chief Complaint
     await this.chiefComplaintTextarea.fill('Test Chief Complaint from Automation');

     // Guardian
     await this.guardianInput.fill('Test Guardian Name');

     // Impression
     await this.impressionTextarea.fill('Test Impression from Automation');

     // Remarks
     await this.remarksTextarea.fill('Test Remarks from Automation');

     // Investigator — type "mark" char-by-char to trigger ng-change, then click result
     await this.investigatorInput.clear();
     await this.investigatorInput.pressSequentially('mark', { delay: 50 });
     await this.page.waitForTimeout(2000);
     await this.page.locator('div.ac-container ul.ac-menu li.ac-menu-item a.fastclickable')
       .filter({ hasText: /mark/i })
       .first()
       .click();

     // Is Covid19 Related — randomly
     const covidCount = await this.isCovid19Select.locator('option').count();
     await this.isCovid19Select.selectOption({ index: Math.floor(Math.random() * (covidCount - 1)) + 1 });

     // Save
     await this.saveVisitBtn.click();

     // Validate toast
     await expect(this.visitSavedToast).toBeVisible({ timeout: 8000 });
   }

   async viewChart() {
     await this.page.locator('.btn.action-mobile.fastclickable').first().dispatchEvent('click');
     await this.page.waitForTimeout(1500);
     await this.viewChartOption.dispatchEvent('click');
     await this.page.waitForTimeout(2000);
   }

   async editPatientProfile() {
     // Open ellipsis for first patient
     await this.page.locator('.btn.action-mobile.fastclickable').first().dispatchEvent('click');
     await this.page.waitForTimeout(1500);

     // Click Edit Profile
     await this.editProfileOption.dispatchEvent('click');
     await this.page.waitForTimeout(2000);

     // Fill Place of Birth
     await this.placeOfBirthInput.fill('Manila, Philippines');

     // Fill Nationality
     await this.nationalityInput.fill('Filipino');

     // Select Blood Type randomly
     const bloodTypes = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
     const randomBloodType = bloodTypes[Math.floor(Math.random() * bloodTypes.length)];
     await this.bloodTypeSelect.selectOption({ label: randomBloodType });

     // Check a random Ethnicity checkbox from the known options
     const ethnicityOptions = [
       'American Indian or Alaska Native',
       'Asian',
       'Black or African American',
       'Hispanic / Latino',
       'White',
       'Native Hawaiian or Other Pacific Islander',
     ];
     const randomEthnicity = ethnicityOptions[Math.floor(Math.random() * ethnicityOptions.length)];
     await this.page.getByRole('checkbox', { name: randomEthnicity }).check();

     // Click the green check to save
     await this.saveProfileBtn.dispatchEvent('click');

     // Validate toast
     await expect(this.profileSavedToast).toBeVisible({ timeout: 8000 });
     await expect(this.profileSavedToast).toHaveText('Successfully Saved Patient Profile');
   }
}