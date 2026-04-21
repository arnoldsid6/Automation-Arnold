import { Page } from '@playwright/test';
import { LoginPage } from '../PageObject/LoginPage';
import { ProfilePage } from '../PageObject/ProfilePage';
import { Reception } from '../PageObject/Reception';
import { Visits } from '../PageObject/Visits';

export class PageObjectManager {
  readonly page: Page;
  readonly loginPage: LoginPage;
  readonly profilePage: ProfilePage;
  readonly reception: Reception;
  readonly visits: Visits;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.profilePage = new ProfilePage(this.page);
    this.reception = new Reception(this.page);
    this.visits = new Visits(this.page);
  }

  LoginPageLocators() {
    return this.loginPage;
  }

   ProfilePageLocators() {
    return this.profilePage;
  } 

  ReceptionLocators() {
    return this.reception;
  }
  visitsLocators() {
    return this.visits;
  }
}