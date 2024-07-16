const fs = require("fs");
const path = require("path");
const log = require("./logger");

async function saveContents(page, url, outputFormat) {
  try {
    log(`Navigating to content URL: ${url}`);
    await page.goto(url, { waitUntil: "networkidle" });

    // 保存先ディレクトリを設定
    const baseDir = outputFormat === "png" ? "../contents_png" :  "../contents";
    const urlPath = new URL(url).pathname;
    const savePath = path.join(__dirname, baseDir, urlPath);

    log(`Creating directories for path: ${path.dirname(savePath)}`);
    fs.mkdirSync(path.dirname(savePath), { recursive: true });

    if (outputFormat == "png") {
      const fileName = savePath.endsWith("/") ? "index.png" :
        (savePath.endsWith(".png") ? path.basename(savePath) : `${path.basename(savePath)}.png`);
      const filePath = path.join(path.dirname(savePath), fileName);

      log(`Saving screenshot to file: ${filePath}`);
      await page.screenshot({path: filePath, fullPage: true});

      log(`Saved screenshot from ${url} to ${filePath}`);
      return filePath;
    } else {
      log(`Fetching content from URL: ${url}`);
      const content = await page.content();
      const fileName = savePath.endsWith("/") ? "index.html" :
        (savePath.endsWith(".html") ? path.basename(savePath) : `${path.basename(savePath)}.html`);
      const filePath = path.join(path.dirname(savePath), fileName);

      log(`Saving content to file: ${filePath}`);
      fs.writeFileSync(filePath, content);

      log(`Saved content from ${url} to ${filePath}`);
      return filePath;
    }
  } catch (error) {
    log(`Failed to save content from ${url}: ${error.message}`);
    return null;
  }
}

module.exports = saveContents;
