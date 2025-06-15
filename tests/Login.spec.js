const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PO/LoginPage');
const { allure } = require('allure-playwright'); // 🆕 import allure

test.use({
  viewport: null,
  launchOptions: {
    args: ['--start-maximized'],
    headless: true,
  }
});

test('Login successfully using Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);

  allure.label({ name: 'testType', value: 'e2e' });         // 🆕 Thêm tag
  allure.severity('critical');                              // 🆕 Mức độ nghiêm trọng
  allure.owner('Homunlily');                                // 🆕 Gán người viết test

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await loginPage.assertSuccessMessage();
  await loginPage.assertUrlAfterLogin();

  allure.step('Login completed', () => {});                 // 🆕 Bước giả
});
