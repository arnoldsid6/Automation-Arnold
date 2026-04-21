import { Locator, Page } from "@playwright/test";

export class ProfilePage {
  readonly page: Page;
  readonly userName: Locator;
  readonly userPassword: Locator;
  readonly loginButton: Locator;
  readonly HomePageURL: string;
  readonly LoginPageURL: string;
  readonly userPic: Locator;
  readonly myProfileURL: string;
  readonly editProfileButton: Locator;
  readonly editValidation: Locator;
  readonly prefix: Locator;
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly lastName: Locator;
  readonly suffix: Locator;
  readonly customName: Locator;
  readonly phoneNumber: Locator;
  readonly civilStatusLocator: Locator;
  readonly dateOfBirth: Locator;
  readonly gender: Locator;
  readonly emailAddress: Locator;
  readonly specialization: Locator;
  readonly phicNumber: Locator;
  readonly prcLicenseNumber: Locator;
  readonly prcExpiryDate: Locator;
  readonly tinNumber: Locator;
  readonly ptrNumber: Locator;
  readonly s2Number: Locator;
  readonly primaryDepartment: Locator;
  readonly saveBtn: Locator;
  readonly successfulText: Locator;
  readonly enableSpeechToText: Locator;
  readonly successfulTextToast: Locator;
  readonly appsButton: Locator;
  readonly ehrLogoButton: Locator;
  readonly micOn: Locator;
  readonly toastmessage: Locator;
  readonly EHRHomePageURL: string;
  readonly editProfileModule: Locator;
  //readonly modalMissingInformation: Locator;
  //Upload and Annonate Digital Signature Locators
  readonly imageUploadInput: Locator;
  readonly insertImage: Locator;
  readonly uploadButton: Locator;
  readonly uploadSignatureValidation: Locator;
  readonly digitalSigAnnotationButtons: Locator;
  readonly digitalSigActualCanvas: Locator;
  readonly digitalSaveButton: Locator;
  // Uploading Subheader
  readonly prescriptionButton: Locator;
  readonly prescriptionToaster: Locator;
  // Upload Profile Image
  readonly uploadImageButton: Locator;
  readonly profileUploadButton: Locator;
  readonly fileInput: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator("#username");
    this.userPassword = page.locator("#password");
    this.loginButton = page.locator("#loginFormSubmitButton");
    this.userPic = page.locator("#userPic");
    this.EHRHomePageURL = "http://localhost:8084/app/user/user.html#/visits";
    this.HomePageURL = "http://localhost:8084/app/user/user.html#/visits";
    this.LoginPageURL =
      "http://localhost:8083/app/index/index.html#!/login";
    this.myProfileURL =
      "http://localhost:8083/app/main/main.html#!/profile-management";
    this.editProfileModule = page.locator("#-sidebar3");
    this.editProfileButton = page.locator("#lnkEditProfile");
    this.editValidation = page.getByRole("heading", { name: /edit profile/i });
    this.prefix = page.getByRole("textbox", { name: "Prefix" });
    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.middleName = page.getByRole("textbox", { name: "Middle Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.suffix = page.getByRole("textbox", { name: "Suffix" });
    this.customName = page.getByRole("textbox", { name: "Custom Name" });
    this.phoneNumber = page.getByRole("textbox", { name: "Phone Number" });
    //this.civilStatus = page.getByRole('combobox', { name: 'Civil Status' });
    this.civilStatusLocator = page.locator('#txtCivilStatus');
    this.dateOfBirth = page.locator(
      'input[ng-model="pm.editUserProfile.birthDate"]',
    );
    this.emailAddress = page.locator("#txtEmail");
    this.specialization = page.locator("#txtSpecializationPosition");
    this.phicNumber = page.locator("#txtPhicNo");
    this.prcLicenseNumber = page.locator("#txtLicNo");
    this.prcExpiryDate = page.locator(
      'input[ng-model="pm.editUserProfile.licenseExpirationDate"]',
    );
    this.tinNumber = page.locator("#txtTin");
    this.ptrNumber = page.locator("#txtPtrNo");
    this.s2Number = page.locator("#txtS2No");
    this.gender = page.locator("#txtGender");
    this.primaryDepartment = page.locator("#txtPrimaryDoctor");
    this.saveBtn = page.locator("#btnSave");
    this.successfulText = page
      .locator("div")
      .filter({ hasText: "Successfully Updated!" })
      .nth(1);
    //Speech to text
    this.enableSpeechToText = page.locator("#speechToText");
    this.successfulTextToast = page.locator(".toast-success");
    this.appsButton = page.locator("#lnkApps");
    this.ehrLogoButton = page.locator("#ehr");
    this.micOn = page.getByTitle("Speak");
    this.toastmessage = page.locator("#toast-container .toast-message").first();
    //Upload and Annonate Digital Signature Locators
    this.imageUploadInput = page.locator("#digitalSigUploadIconInverse");
    this.insertImage = page.locator("#filePhoto");
    this.uploadButton = page.locator("#btnUploadPhoto");
    this.uploadSignatureValidation = page
      .locator("#toast-container .toast-message")
      .last();
    this.digitalSigAnnotationButtons = page.getByRole("button", {
      name: "Digital Signature",
    });
    this.digitalSigActualCanvas = page.locator("#digitalSignature");
    this.digitalSaveButton = page.locator("#btnCreate");
    // Uploading Subheader
    this.prescriptionButton = page.locator("#prescriptionSubHeaderIcon");
    this.prescriptionToaster = page.locator(".toast-message");
    //Upload Profile Image
    this.uploadImageButton = page.locator("#lnkShowUploadPhotoForm");
    this.profileUploadButton = page.locator("#btnUploadPhoto");
    this.fileInput = page.locator("#filePhoto");
  }
  async recheckEnableSpeechToText() {
    const checkbox = this.enableSpeechToText;

    // If already checked → uncheck first
    if (await checkbox.isChecked()) {
      await checkbox.uncheck();
    }

    // Then always check again
    await checkbox.check();
/*
  }
   async selectCivilStatusSingle() {
    await this.civilStatus.selectOption({ label: 'Married' });
    */
  }
  
}

