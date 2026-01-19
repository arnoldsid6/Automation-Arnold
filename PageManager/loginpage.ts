import { Page } from '@playwright/test';
import { Register } from "../PageObject/PracticalExamRegistration"
import { WelcomeLogin } from "../PageObject/WelcomePage"
import { OrderingMain } from "../PageObject/Ordering"

export class Registration {
  private page: Page;
  private Register: Register;
  private WelcomePage: WelcomeLogin;
  private Ordering: OrderingMain;

  constructor(page: Page) {
    this.page = page;
    this.Register = new Register(this.page);
    this.WelcomePage = new WelcomeLogin(this.page);
    this.Ordering = new OrderingMain(this.page);
  }

  getPracticalExamRegistration() {
    return this.Register;
  }
   WelcomeLogin() {
    return this.WelcomePage;
  }
   OrderingMain() {
    return this.Ordering;
  }
  

}