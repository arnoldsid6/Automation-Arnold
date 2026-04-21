import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../../PageManager/PageObjectManager';
import { faker } from '@faker-js/faker';


const TEST_CREDENTIALS = {
  password: 'abcdE@123',
  securityAnswer: 'potchi',
  userRole: 'number:0'
};
 
test.describe("Account Management - Create New Users", () => { 
  let testUser: any;
  let loginPage: any;

  test.beforeEach(async ({ page }) => {
    const pageManager = new PageObjectManager(page);
    loginPage = pageManager.LoginPageLocators();
    testUser = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(), 
      prefix: faker.person.prefix(),
      middleName: faker.person.middleName(),
      suffix: faker.person.suffix(),
      phoneNumber: `09${Math.floor(100000000 + Math.random() * 900000000)}`,
      email: `${faker.person.firstName()}${faker.person.lastName()}@mailinator.com`.toLowerCase(),
      username: `${faker.person.firstName()}${faker.person.lastName()}`.toLowerCase()
    };
  });

  test("Create new user account successfully", async ({ page }) => {
    await page.goto(loginPage.LoginPageURL, { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(loginPage.LoginPageURL);
    await loginPage.createAccount.click();
    await loginPage.prefix.fill(testUser.prefix);
    await loginPage.lastName.fill(testUser.lastName);
    await loginPage.firstName.fill(testUser.firstName);
    await loginPage.middleName.fill(testUser.middleName);
    await loginPage.suffix.fill(testUser.suffix);
    await loginPage.phoneNumber.fill(testUser.phoneNumber);
    await loginPage.emailAddress.fill(testUser.email);
    await loginPage.answer.fill(TEST_CREDENTIALS.securityAnswer);
    await loginPage.userName.fill(testUser.username);
    await loginPage.userRole.selectOption(TEST_CREDENTIALS.userRole);
    await loginPage.password.fill(TEST_CREDENTIALS.password);
    await loginPage.confirmPassword.fill(TEST_CREDENTIALS.password);
    await loginPage.signUpBtn.click();
    await expect(page).toHaveURL(loginPage.HomePageURL);
});
});
