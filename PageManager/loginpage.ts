import { Page } from '@playwright/test';
import { Register } from "../PageObject/PracticalExamRegistration";
import { WelcomeLogin } from "../PageObject/WelcomePage"
import { OrderingMain } from "../PageObject/Ordering"

export class Registration {
  private page: Page;
  private practicalExamRegistration: Registration;
  private WelcomePage: WelcomeLogin;
  private Ordering: OrderingMain;

  constructor(page: Page) {
    this.page = page;
    this.practicalExamRegistration = new Registration(this.page);
    this.WelcomePage = new WelcomeLogin(this.page);
    this.Ordering = new OrderingMain(this.page);
  }

  getPracticalExamRegistration() {
    return this.practicalExamRegistration;
  }

}