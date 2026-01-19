import { expect, Locator, Page } from '@playwright/test';

    export class WelcomeLogin{
        readonly WelcomePage: Page; 
        readonly WelUsername: Locator;
        readonly WelPassword: Locator;
        readonly WelLoginBtn: Locator;

        constructor (page: Page){
this.WelcomePage = page;
this.WelUsername = page.locator('#userEmail');
this.WelPassword = page.locator('#userPassword');
this.WelLoginBtn = page.locator('.btn.btn-block.login-btn');
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


    
