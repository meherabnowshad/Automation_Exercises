import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly signupLoginLink: Locator;

  constructor(page: ConstructorParameters<typeof BasePage>[0]) {
    super(page);
    this.signupLoginLink = page.getByRole('link', { name: /Signup \/ Login/ });
  }

  async open(): Promise<void> {
    await super.open('/');
  }

  async openLoginPage(): Promise<void> {
    await this.signupLoginLink.click();
  }
}