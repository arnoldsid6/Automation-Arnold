import { test, expect } from "@playwright/test";
import { PageObjectManager } from '../../../PageManager/PageObjectManager';
import path from "path";

const TEST_CREDENTIALS = {
  user: "aljon",
  password: "abcdE@123",
};

const filePath = path.join(__dirname, "Uploads/Profilepic.jpg");

test("Profile Image Upload Test", async ({ page }) => {
  const pageObjectManager = new PageObjectManager(page);
  const profilePage = pageObjectManager.ProfilePageLocators();

  await page.goto(profilePage.LoginPageURL, { waitUntil: "networkidle" });
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

  await expect(profilePage.uploadImageButton).toBeEnabled();
  console.log(
    "Profile button is enabled?",
    await profilePage.uploadImageButton.isEnabled(),
  );

  await profilePage.uploadImageButton.click();

  await profilePage.fileInput.setInputFiles(filePath);

  await expect(profilePage.profileUploadButton).toBeVisible();
  await expect(profilePage.profileUploadButton).toBeEnabled();
  console.log(
    "Profile Upload button is enabled?",
    await profilePage.profileUploadButton.isEnabled(),
  );

  await Promise.all([
    page.waitForResponse(
      (res) =>
        res.url().includes("/api/User/UploadUserPicture") &&
        (res.status() === 200 || res.status() === 201),
      { timeout: 15000 },
    ),
    profilePage.profileUploadButton.click(),
  ]);

  console.log(" Upload API Successful!");
  await page.pause();
});
