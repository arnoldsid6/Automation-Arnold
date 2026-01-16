import { test, expect} from "@playwright/test";
import { Register } from "../PageObject/PracticalExamRegistration";
import { WelcomeLogin } from "../PageObject/WelcomePage";
import { OrderingMain } from "../PageObject/Ordering"

test('PracticalExam', async ({ page }) => {

    
 
await new Register(page).goTo();
await expect(page).toHaveURL(new Register(page).RegURL);
/*
await new Register(page).clickRegisterButton();
await new Register(page).FillFirstname();
await new Register(page).FillLastname();
await new Register(page).FillEmail();
await new Register(page).FillPhonenumber();
await new Register(page).chooseOccupation();
await new Register(page).ChooseGender();
await new Register(page).FillPassword();
await new Register(page).FillConfirmPassword();
await new Register(page).Check18years();
await new Register(page).SubmitButton();
await new Register(page).BackTologin();
*/

// Login

await new WelcomeLogin(page).UserName();
await new WelcomeLogin(page).UserPassword();
await new WelcomeLogin(page).LoginBtn();

//Order
await page.waitForTimeout(1000);
await new OrderingMain(page).viewcart();
await page.waitForTimeout(1000);
await new OrderingMain(page).addtocart();
await page.waitForTimeout(1000);
await new OrderingMain(page).continueshopping();
await page.waitForTimeout(1000);
await new OrderingMain(page).cartoutside();
await page.waitForTimeout(1000);
await new OrderingMain(page).cart();
await page.waitForTimeout(2000);
await new OrderingMain(page).chckout();
await new OrderingMain(page).cardnumber();
await new OrderingMain(page).month();
await new OrderingMain(page).date();
await new OrderingMain(page).cvv();
await new OrderingMain(page).nameoncard();
await new OrderingMain(page).selectcountry();
await new OrderingMain(page).country();
await new OrderingMain(page).placeorder();
await page.waitForTimeout(2000);
await new OrderingMain(page).download();
await page.waitForTimeout(2000);
await new OrderingMain(page).ordermodule();
await page.waitForTimeout(2000);
await new OrderingMain(page).gobackshop();
await page.waitForTimeout(2000);
await new OrderingMain(page).signout();

/*
const download1Promise = page.waitForEvent('download');
    const download1 = await download1Promise;
    */
});
