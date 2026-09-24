// tests/login.spec.ts
import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Automation Exercise - User Login', () => {
  const REGISTERED_EMAIL = 'meherabhossainnowshad@gmail.com';
  const REGISTERED_PASSWORD = '1234';
  const REGISTERED_USERNAME = 'Meherab Hossain Nowshad';

  test('Should successfully log in with registered credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Launch the website
    await loginPage.navigateHome();

    // 2. Navigate to the Login page
    await loginPage.goToLoginPage();

    // 3. Enter registered email address and password & 4. Submit the form
    await loginPage.login(REGISTERED_EMAIL, REGISTERED_PASSWORD);

    // 5. Verify that the login was successful
    await loginPage.verifyLoginSuccess(REGISTERED_USERNAME);
    await expect(page).toHaveURL(/automationexercise\.com\/?$/);
  });
});
