// pages/LoginPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly signupLoginButton: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loggedInUserText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginButton = page.locator('a[href="/login"]');
    this.emailInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.loggedInUserText = page.locator('a:has(i.fa-user) b');
  }

  async navigateHome() {
    await this.page.goto('/');
  }

  async goToLoginPage() {
    await this.signupLoginButton.click();
  }

  async login(email: string, pass: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }

  async verifyLoginSuccess(expectedUsername: string) {
    await expect(this.loggedInUserText).toBeVisible();
    await expect(this.loggedInUserText).toHaveText(expectedUsername);
  }
}
