import { test, expect } from "@playwright/test";
import { PageObjectManager } from '../../../PageManager/PageObjectManager';
import path from "path";



const TEST_CREDENTIALS = {
  user: "aljon",
  password: "abcdE@123",
};

const filePath = path.join(__dirname, "Uploads/images.png");

test("Upload and Annotate Digital Signature", async ({ page }) => {
 
  const pagemanager = new PageObjectManager(page);
  const profilePage = pagemanager.ProfilePageLocators();

  const fileInputSelector = "#filePhoto";
  const canvas = profilePage.digitalSigActualCanvas;
  type Point = [number, number];

  // Navigate to the login page
  await page.goto(profilePage.LoginPageURL, { waitUntil: "networkidle" });
  await expect(page).toHaveURL(profilePage.LoginPageURL);

  await profilePage.userName.fill(TEST_CREDENTIALS.user);
  await profilePage.userPassword.fill(TEST_CREDENTIALS.password);
  await profilePage.loginButton.click();
  await expect(page).toHaveURL(profilePage.HomePageURL);

  await profilePage.userPic.click();
  // Entering Edit Profile
  await profilePage.editProfileModule.click();
    await expect(page).toHaveURL(profilePage.myProfileURL);
  await profilePage.imageUploadInput.click();

  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator(fileInputSelector).click(),
  ]);

  await fileChooser.setFiles(filePath);
  await profilePage.uploadButton.click();

  await expect(profilePage.uploadSignatureValidation).toBeVisible();
  await expect(profilePage.uploadSignatureValidation).toHaveText(
    "Digital signature successfully uploaded.",
  );

  console.log(
    "Upload Image message is:",
    await profilePage.uploadSignatureValidation.textContent(),
  );

  // Open annotation modal
  await profilePage.digitalSigAnnotationButtons.click();

  // Make canvas stable before drawing
  await expect(canvas).toBeVisible();
  await canvas.scrollIntoViewIfNeeded();

  // ✅ STABLE stroke (no waitForTimeout in retry)
  const stroke = async (points: Point[]) => {
    if (points.length < 2) throw new Error("Need at least 2 points");

    const box = await canvas.boundingBox();
    if (!box) throw new Error("Canvas not found");

    const runStroke = async () => {
      const [x0, y0] = points[0];
      await page.mouse.move(box.x + x0, box.y + y0);
      await page.mouse.down();

      for (let i = 1; i < points.length; i++) {
        const [x, y] = points[i];
        await page.mouse.move(box.x + x, box.y + y, { steps: 5 });
      }

      await page.mouse.up();
    };

    try {
      await runStroke();
    } catch (err) {
      await page.mouse.up().catch(() => {});
      await expect(canvas).toBeVisible(); // re-sync (no sleep)
      await runStroke();
    }
  };

  // Draw ARNOLD (your same strokes)
  await stroke([
    [80, 180],
    [110, 80],
    [140, 180],
  ]);
  await stroke([
    [95, 140],
    [125, 140],
  ]);

  await stroke([
    [170, 80],
    [170, 180],
  ]);
  await stroke([
    [170, 80],
    [220, 90],
    [210, 120],
    [170, 120],
  ]);
  await stroke([
    [170, 120],
    [225, 180],
  ]);

  await stroke([
    [260, 80],
    [260, 180],
  ]);
  await stroke([
    [260, 80],
    [310, 180],
  ]);
  await stroke([
    [310, 80],
    [310, 180],
  ]);

  await stroke([
    [350, 100],
    [400, 90],
    [440, 120],
    [430, 170],
    [370, 180],
    [350, 150],
    [350, 100],
  ]);

  await stroke([
    [470, 80],
    [470, 180],
  ]);
  await stroke([
    [470, 180],
    [520, 180],
  ]);

  await stroke([
    [550, 80],
    [550, 180],
  ]);
  await stroke([
    [550, 80],
    [600, 95],
    [610, 130],
    [600, 165],
    [550, 180],
  ]);
  // Save annotation
  await profilePage.digitalSaveButton.click();

  // Validate toast (or whatever happens after save)
  await expect(profilePage.uploadSignatureValidation).toBeVisible();

  console.log(
    "Annotation message is:",
    await profilePage.uploadSignatureValidation.textContent(),
  );
  await page.pause();
});
