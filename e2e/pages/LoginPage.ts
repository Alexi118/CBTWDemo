import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email_txt: Locator;
  readonly email_error_msg: Locator;
  readonly password_txt: Locator;
  readonly password_error: Locator;
  readonly login_btn: Locator;
  readonly login_successfully_msg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email_txt = page.locator('#txtEmail');
    this.email_error_msg = page.locator('#lblEmailErr');
    this.password_txt = page.locator('#txtPassword');
    this.password_error = page.locator('#lblPasswordErr');
    this.login_btn = page.locator('#btnLogin');
    this.login_successfully_msg = page.locator('#lblLoggedinSuccessfully');
  }

  async goToBaseURLAndLogin(email:string,password:string){
    await this.page.goto('baseURL');
    await this.email_txt.fill(email);
    await this.password_txt.fill(password);
    await this.login_btn.click()
  }
}