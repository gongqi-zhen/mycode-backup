const fs = require("fs");
const path = require("path");
const log = require("./logger");

async function saveContents(page, url) {
  try {
    log(`Navigating to content URL: ${url}`);
    await page.goto(url, { waitUntil: "networkidle" });

    log(`Fetching content from URL: ${url}`);
    const content = await page.content();

    // URLからディレクトリ構造を作成
    const urlPath = new URL(url).pathname;
    const savePath = path.join(__dirname, "../contents", urlPath);

    log(`Creating directories for path: ${path.dirname(savePath)}`);
    fs.mkdirSync(path.dirname(savePath), { recursive: true });

    const fileName = savePath.endsWith("/") ? "index.html" : 
      (savePath.endsWith(".html") ? path.basename(savePath) : `${path.basename(savePath)}.html`);
    const filePath = path.join(path.dirname(savePath), fileName);

    log(`Saving content to file: ${filePath}`);
    fs.writeFileSync(filePath, content);

    log(`Saved content from ${url} to ${filePath}`);
    return filePath;
  } catch (error) {
    log(`Failed to save content from ${url}: ${error.message}`);
    return null;
  }
}

module.exports = saveContents;
