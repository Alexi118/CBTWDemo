import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { WelcomePage } from '../pages/WelcomePage';

test('getting started should contain table of contents', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const welcomePage = new WelcomePage(page);

    await loginPage.goToBaseURLAndLogin('email','password')
    await page.waitForURL('baseURL/welcome')
    await expect(welcomePage.login_successfully_msg).toHaveText('You have logged-in successfully!')
})