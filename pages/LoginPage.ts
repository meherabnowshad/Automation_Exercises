import { Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly signupLoginButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loggedInUserText: Locator;

  constructor(page: ConstructorParameters<typeof BasePage>[0]) {
    super(page);
    this.signupLoginButton = page.locator('a[href="/login"]');
    this.emailInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.loggedInUserText = page.locator('a:has(i.fa-user) b');
  }

  async open(): Promise<void> {
    await super.open('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoggedInAs(expectedUsername: string): Promise<void> {
    await expect(this.loggedInUserText).toBeVisible();
    await expect(this.loggedInUserText).toHaveText(expectedUsername);
    await expect(this.page).toHaveURL(/automationexercise\.com\/?$/);
  }
}
