const loginToMyCode = require("../login");
const config = require("../config");
const { chromium } = require("playwright");

jest.setTimeout(30000);

test("should login successfully", async () => {
  const browser = await chromium.launch({headless: false});
  const context = await browser.newContext();
  const page = await context.newPage();

  // モックデータを使用してテスト
  const { username, password, secretAnswer } = config;

  await expect(loginToMyCode(page, username, password, secretAnswer)).resolves.not.toThrow();

  await browser.close();
});
