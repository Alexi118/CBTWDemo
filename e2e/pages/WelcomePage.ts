import { expect, type Locator, type Page } from '@playwright/test';

export class WelcomePage {
  readonly page: Page;
  readonly login_successfully_msg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.login_successfully_msg = page.locator('#lblLoggedinSuccessfully');
  }
}