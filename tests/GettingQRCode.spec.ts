import {test, expect} from "@playwright/test"

test('QR Code QMEUP Test', async ({page}) =>
{
await page.goto("http://localhost:9096/kiosk/KiE5HYy4QJp6uicaa/ge2FYeedx5Buow6rP/services");
await page.getByRole('button', {name: 'Internal Medicine'}).click();
await page.getByRole('button', {name: 'Queue Me Up'}).click();
await page.getByRole('button', {name: 'No, Skip This'}).click();

});