import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailFields: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly HomePageURL: string;
  readonly LoginPageURL: string;
  readonly createAccount: Locator;
  readonly prefix: Locator;
  readonly lastName: Locator;
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly suffix: Locator;
  readonly phoneNumber: Locator;
  readonly emailAddress: Locator;
  readonly answer: Locator;
  readonly userRole: Locator;
  readonly userName: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly signUpBtn:Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.emailFields = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.loginButton = page.locator("#loginFormSubmitButton");
    this.errorMessage = page
      .locator("div")
      .filter({ hasText: "Invalid Username or Password!" })
      .nth(1);
    this.HomePageURL =
      "http://localhost:8083/app/main/main.html#!/home";
    this.LoginPageURL =
      "http://localhost:8083/app/index/index.html#!/login";
    this.createAccount = page.getByRole('link', { name: 'Create an account' });
    this.prefix = page.getByRole('textbox', { name: 'Prefix' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name' })
    this.firstName = page.getByRole('textbox', { name: 'First Name' })
    this.middleName = page.getByRole('textbox', { name: 'Middle Name' })
    this.suffix = page.getByRole('textbox', { name: 'Suffix' })
    this.phoneNumber = page.getByRole('textbox', { name: 'Phone Number'})
    this.emailAddress = page.getByRole('textbox', { name: 'Email Address'})
    this.answer = page.getByRole('textbox', { name: 'Answer'})
    this.userRole = page.locator('#txtSelectedRole')
    this.userName = page.getByRole('textbox', { name: 'Username'})
    this.password = page.locator('#credpass')
    this.confirmPassword = page.locator('#confirmPass')
    this.signUpBtn =  page.locator('#signUpFormSubmitButton')
  }

  async loginAdmin() {
    await this.page.goto(this.LoginPageURL);
    await this.emailFields.fill("admin");
    await this.passwordField.fill("admin123");
    await this.loginButton.click();

  }

  async loginHeadNurse() {
    await this.page.goto(this.LoginPageURL);
    await this.emailFields.fill("cali");
    await this.passwordField.fill("abcdE@123");
    await this.loginButton.click();
  }

  async loginMainDoctor() {
    await this.page.goto(this.LoginPageURL);
    await this.emailFields.fill("mdpalanca");
    await this.passwordField.fill("abcdE@123");
    await this.loginButton.click();
  }
  
}
