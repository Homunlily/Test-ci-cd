// pages/LoginPage.js
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('.flash');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertSuccessMessage() {
    await expect(this.flashMessage).toContainText('You logged into a secure area!');
  }

  async assertUrlAfterLogin() {
    await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/secure');
  }
  
}
const { expect } = require('@playwright/test');
module.exports = { LoginPage };
