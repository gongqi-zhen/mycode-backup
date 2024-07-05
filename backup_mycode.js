const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const {
  terminationUrls,
  accountUrls,
  testResultsUrls,
  lifestyleSupportUrls,
  optionUrls,
  contentsfumfumUrls,
} = require("./urls");

(async () => {
  // ブラウザを起動
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  // ページを開く
  const page = await context.newPage();

  // 収集するリンク情報
  let links = [];

  try {
    // 環境変数から読み込み
    const { USERNAME, PASSWORD, SECRET_ANSWER } = process.env;
    await loginToMyCode(page, USERNAME, PASSWORD, SECRET_ANSWER);
    console.log("Logged in successfully");

    const contentUrls = getContentUrls();

    for (const item of contentUrls) {
      const {url, name} = item;
      const filePath = await saveContents(page, url);
      links.push({url, name, filePath});
    }

    generateIndexHtml(links);

  } catch (error) {
    console.log("An error occurred:", error);
  } finally {
    await browser.close();
  }
})();

async function loginToMyCode(page, username, password, secretAnswer) {
  console.log("Navigating to login page");
  await page.goto("https://mycode.jp/login.html?int=gmenu");

  console.log("Filling in login credentials");
  await page.fill("#email", username);
  await page.fill("#pwd", password);
  await page.click("#btn-login");

  console.log("Waiting for secret question page");
  await page.waitForSelector("#security_question_answer", { timeout: 60000 });

  console.log("Filling in secret question answer");
  await page.fill("#security_question_answer", secretAnswer);
  await page.click("#submit-default");

  console.log("Navigating to a specific page after secret answer");
  await page.goto("https://mycode.jp/", { waitUntil: "load" });
}

// 有料コンテンツのURLリスト
function getContentUrls() {
  // 全てのURLを結合
  return [
    ...terminationUrls,
    ...accountUrls,
    ...testResultsUrls,
    ...lifestyleSupportUrls,
    ...optionUrls,
    ...contentsfumfumUrls,
  ];
}

async function saveContents(page, url) {
  try {
    console.log(`Navigating to content URL: ${url}`);
    // await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    // await page.waitForTimeout(1000); // "at least 1000 msec"
    await page.goto(url, { waitUntil: "networkidle" });

    console.log(`Fetching content from URL: ${url}`);
    const content = await page.content();

    // URLからディレクトリ構造を作成
    const urlPath = new URL(url).pathname;
    const savePath = path.join(__dirname, "contents", urlPath);

    console.log(`Creating directories for path: ${path.dirname(savePath)}`);
    fs.mkdirSync(path.dirname(savePath), { recursive: true });

    const fileName = savePath.endsWith("/") ? "index.html" : 
      (savePath.endsWith(".html") ? path.basename(savePath) : `${path.basename(savePath)}.html`);
    const filePath = path.join(path.dirname(savePath), fileName);

    console.log(`Saving content to file: ${filePath}`);
    fs.writeFileSync(filePath, content);

    console.log(`Saved content from ${url} to ${filePath}`);
    return filePath;
  } catch (error) {
    console.error(`Failed to save content from ${url}:`, error);
  }
}

function generateIndexHtml(links) {
  const indexPath = path.join(__dirname, "contents", "index.html");
  let htmlContent = `
    <html>
    <head>
      <title>Saved Pages Index</title>
    </head>
    <body>
      <h1>Saved Pages Index</h1>
      <ul>
  `;

  links.forEach(link => {
    if (link.filePath) {
      const relativePath = path.relative(path.dirname(indexPath), link.filePath);
      htmlContent += `<li><a href="${relativePath}">${link.name}</a></li>\n`;
    }
  });

  htmlContent += `
      </ul>
    </body>
    </html>
  `;

  console.log(`Saving index to file: ${indexPath}`);
  fs.writeFileSync(indexPath, htmlContent);
  console.log(`Saved index to ${indexPath}`);
}
