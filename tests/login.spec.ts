import { test } from './fixtures';
import { registeredUser } from '../test-data/users';

test.describe('Automation Exercise - User Login', () => {
  test('successfully logs in with registered credentials', async ({ homePage, loginPage }) => {
    await homePage.open();
    await homePage.openLoginPage();
    await loginPage.login(registeredUser.email, registeredUser.password);
    await loginPage.expectLoggedInAs(registeredUser.username);
  });
});
