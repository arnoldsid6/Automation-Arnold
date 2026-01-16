import { expect, Locator, Page } from '@playwright/test';

    export class WelcomeLogin{
        readonly WelcomePage: Page; 
        readonly WelUsername: Locator;
        readonly WelPassword: Locator;
        readonly WelLoginBtn: Locator;

        constructor (WelcomePage: Page){
this.WelcomePage = WelcomePage;
this.WelUsername = WelcomePage.locator('#userEmail');
this.WelPassword = WelcomePage.locator('#userPassword');
this.WelLoginBtn = WelcomePage.locator('.btn.btn-block.login-btn');
        }

        async UserName() {
            await expect(this.WelUsername).toBeVisible();
            await this.WelUsername.fill('polyyy14@mailinator.com');
        }
        async UserPassword() {
             await expect(this.WelPassword).toBeVisible();
            await this.WelPassword.fill('abcdE123');
        }
        async LoginBtn() {
            await expect(this.WelLoginBtn).toBeEnabled();
            await this.WelLoginBtn.click();
        }

    }


    
