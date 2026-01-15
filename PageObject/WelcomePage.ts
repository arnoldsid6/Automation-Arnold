import { Locator, Page } from '@playwright/test';

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
            await this.WelUsername.fill('polyyy14@mailinator.com');
        }
        async UserPassword() {
            await this.WelPassword.fill('abcdE123');
        }
        async LoginBtn() {
            await this.WelLoginBtn.click();
        }

    }


    
