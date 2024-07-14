const { chromium } = require("playwright");
const config = require("./config");
const log = require("./logger");
const loginToMyCode = require("./login");
const saveContents = require("./saveContents");
const generateIndexHtml = require("./generateIndexHtml");
const { getContentUrls } = require("./contentUrls");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    const { username, password, secretAnswer } = config;
    await loginToMyCode(page, username, password, secretAnswer);
    log("Logged in successfully");

    const contentUrls = getContentUrls();

    for (const category of contentUrls) {
      for (const link of category.links) {
        await saveContents(page, link.url);
      }
    }

    generateIndexHtml(contentUrls);
  } catch (error) {
    log(`An error occurred: ${error.message}`);
  } finally {
    await browser.close();
  }
})();
