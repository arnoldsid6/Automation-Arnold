import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../../../PageManager/PageObjectManager';
import { faker } from '@faker-js/faker';

const TEST_CREDENTIALS = {
  user: 'aljon',
  password: 'abcdE@123',
  civilStatus: '4',
  specialization: 'Cardiologist',
};

test.describe('Update Profile - Edit Profile', () => {
  let profilePage: any;
  let MainEditProfile: any;

  test.beforeEach(async ({ page }) => {
    const pageManager = new PageObjectManager(page);
    profilePage = pageManager.ProfilePageLocators();

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const dob = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
    const mm = String(dob.getMonth() + 1).padStart(2, '0');
    const dd = String(dob.getDate()).padStart(2, '0');
    const yyyy = dob.getFullYear();
    const yyyyPrc = faker.number.int({ min: 2030, max: 2035 });
    const alphaBet = faker.helpers.arrayElement([
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z'
    ]);

    MainEditProfile = {
      firstName,
      lastName,
      prefix: faker.person.prefix(),
      middleName: faker.person.middleName(),
      suffix: faker.person.suffix(),
      customName: `${faker.person.firstName()}${faker.person.lastName()}`.toLowerCase(),
      mobileNumber: `09${Math.floor(100000000 + Math.random() * 900000000)}`,
      email: `${firstName}.${lastName}@mailinator.com`.toLowerCase(),
      phicNumber: `19-${Math.floor(100000000 + Math.random() * 900000000)}-${Math.floor(1 + Math.random() * 9)}`,
      dateOfBirth: `${yyyy}-${mm}-${dd}`,
      gender: faker.helpers.arrayElement(["number:0", "number:1"]),
      licenseNumber: `${Math.floor(1000000 + Math.random() * 9000000)}`,
      prcExpiryDate: `${yyyyPrc}-${mm}-${dd}`,
      tinNumber: `${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(100 + Math.random() * 900)}-000`,
      ptrNumber: `${Math.floor(1000000 + Math.random() * 9000000)}`,
      s2Number: `S2-${yyyy}-${Math.floor(1000 + Math.random() * 9000)}-${alphaBet}`,
      primaryDepartment: faker.helpers.arrayElement(["number:0","number:8"]),
      civilStatus: 'Married'
    };
  });

  test('should update profile successfully', async ({ page }) => {
     // Navigate to the login page
    await page.goto(profilePage.LoginPageURL, { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(profilePage.LoginPageURL);
    await profilePage.userName.fill(TEST_CREDENTIALS.user);
    await profilePage.userPassword.fill(TEST_CREDENTIALS.password);
    await profilePage.loginButton.click();
    await expect(page).toHaveURL(profilePage.EHRHomePageURL);
    await expect(page).toHaveURL(profilePage.HomePageURL);
    await profilePage.userPic.click();
    // Entering Edit Profile
    await profilePage.editProfileModule.click();
    await expect(page).toHaveURL(profilePage.myProfileURL);
    await profilePage.editProfileButton.click();
    await profilePage.prefix.fill(MainEditProfile.prefix);
    await profilePage.firstName.fill(MainEditProfile.firstName);
    await profilePage.middleName.fill(MainEditProfile.middleName);
    await profilePage.lastName.fill(MainEditProfile.lastName);
    await profilePage.suffix.fill(MainEditProfile.suffix);
    await profilePage.customName.fill(MainEditProfile.customName);
    await profilePage.phoneNumber.fill(MainEditProfile.mobileNumber);
    await profilePage.civilStatusLocator.selectOption({ label: MainEditProfile.civilStatus });
    await profilePage.emailAddress.fill(MainEditProfile.email);
    await profilePage.specialization.fill(TEST_CREDENTIALS.specialization);
    await profilePage.phicNumber.fill(MainEditProfile.phicNumber);
    await profilePage.dateOfBirth.fill(MainEditProfile.dateOfBirth);
    await profilePage.gender.selectOption(String(MainEditProfile.gender));
    await profilePage.prcLicenseNumber.fill(MainEditProfile.licenseNumber);
    await profilePage.prcExpiryDate.fill(MainEditProfile.prcExpiryDate);
    await profilePage.tinNumber.fill(MainEditProfile.tinNumber);
    await profilePage.ptrNumber.fill(MainEditProfile.ptrNumber);
    await profilePage.s2Number.fill(MainEditProfile.s2Number);
    await profilePage.primaryDepartment.selectOption(String(MainEditProfile.primaryDepartment));
    await profilePage.saveBtn.click();
    await expect(profilePage.successfulText).toBeVisible();
  });
});