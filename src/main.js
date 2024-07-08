const { chromium } = require("playwright");
const config = require("./config");
const log = require("./logger");
const loginToMyCode = require("./login");
const saveContents = require("./saveContents");
const generateIndexHtml = require("./generateIndex");
const { getContentUrls } = require("./urls");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  let links = [];

  try {
    const { username, password, secretAnswer } = config;
    await loginToMyCode(page, username, password, secretAnswer);
    log("Logged in successfully");

    const contentUrls = getContentUrls();

    for (const item of contentUrls) {
      const { url, name } = item;
      const filePath = await saveContents(page, url);
      if (filePath) {
        links.push({ url, name, filePath });
      }
    }

    generateIndexHtml(links);
  } catch (error) {
    log(`An error occurred: ${error.message}`);
  } finally {
    await browser.close();
  }
})();
