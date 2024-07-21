const { chromium } = require("playwright");
const config = require("./config");
const log = require("./logger");
const loginToMyCode = require("./login");
const saveContents = require("./saveContents");
const generateIndexHtml = require("./generateIndexHtml");
const { getContentUrls } = require("./contentUrls");

// コマンドライン引数を処理
const args = process.argv.slice(2);
let outputFormat;

if (args.includes("--png")) {
  outputFormat = "png";
} else if (args.includes("--video")) {
  outputFormat = "webm";
} else {
  outputFormat = "html";
}

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
        await saveContents(page, link.url, outputFormat);
      }
    }

    generateIndexHtml(contentUrls, outputFormat);
  } catch (error) {
    log(`An error occurred: ${error.message}`);
  } finally {
    await browser.close();
  }
})();
