// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PO/LoginPage');



test.use({
  viewport: null,
  launchOptions: {
    args: ['--start-maximized'],
    headless: true,
  }
});
test('Login successfully using Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await loginPage.assertSuccessMessage();
  await loginPage.assertUrlAfterLogin();
  //await this.page.waitForTimeout(7000);
});
