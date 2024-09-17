import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('getting started should contain table of contents', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goToBaseURLAndLogin('wrong_email','password')
    await expect(loginPage.password_error).toHaveText('The inputted email or password is not correct.')
})
    