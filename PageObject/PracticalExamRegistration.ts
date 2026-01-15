import { Locator, Page } from '@playwright/test';

export class Register {
  readonly RegPage: Page;
  readonly RegURL: string = 'https://rahulshettyacademy.com/client/#/auth/login';
  readonly RegRegisterButton: Locator;
  readonly RegFirstName: Locator;
  readonly RegLastname: Locator;
  readonly RegEmail: Locator;
  readonly RegPhoneNumber: Locator;
  readonly RegOccupation: Locator;
  readonly RegGender: Locator;
  readonly RegPassword: Locator;
  readonly RegConfirmPassword: Locator;
  readonly Reg18years: Locator;
  readonly RegSubmit: Locator;
  readonly BackToLogin: Locator;

  constructor(page: Page) {
    this.RegPage = page;
    this.RegRegisterButton = page.locator('.login-wrapper-footer-text', {hasText: "Don't have an account?",});
    this.RegFirstName = page.locator('#firstName');
    this.RegLastname = page.locator('#lastName'); 
    this.RegEmail = page.locator('#userEmail');
    this.RegPhoneNumber = page.locator('#userMobile');
    this.RegOccupation = page.getByRole('combobox');
    this.RegGender = page.getByRole('radio', { name: 'Male', exact: true });
    this.RegPassword = page.locator('#userPassword');
    this.RegConfirmPassword = page.locator('#confirmPassword');
    this.Reg18years = page.getByRole('checkbox');
    this.RegSubmit = page.getByRole('button');
    this.BackToLogin = page.locator('button');
  } 
/*
  async fillPersonalDetails(Polyyy: string, RegFirstName: string, lastName: string) {
    await this.RegPage.goto(this.RegURL);
    await this.RegFirstName.fill(Polyyy);
    await this.RegLastname.fill('abcdE123');
  */

async goTo() {
    await this.RegPage.goto(this.RegURL);
  }

  async clickRegisterButton() {
  await this.RegRegisterButton.click();
}

async FillFirstname() {
  await this.RegFirstName.fill('Polyyy');
}

async FillLastname() {
  await this.RegLastname.fill('abcdE123');
}

async FillEmail() {
  await this.RegEmail.fill('polyyy14@mailinator.com');
}

async FillPhonenumber() {
  await this.RegPhoneNumber.fill('1234567890');
}

async chooseOccupation() {
  await this.RegOccupation.selectOption({ label: 'Doctor' });
}

async ChooseGender() {
  await this.RegGender.click();
}

async FillPassword() {
  await this.RegPassword.fill('abcdE123');
}

async FillConfirmPassword() {
  await this.RegConfirmPassword.fill('abcdE123');
}

async Check18years() {
  await this.Reg18years.click();
}

async SubmitButton() {
  await this.RegSubmit.click();
}

async BackTologin() {
  await this.BackToLogin.click();
}



}


