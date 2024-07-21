const fs = require("fs");
const path = require("path");
const log = require("./logger");

async function scrollPage(page, scrollStep = 250, scrollDelay = 100) {
  let scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  let currentPosition = 0;
  while (currentPosition < scrollHeight) {
    currentPosition += scrollStep;
    await page.evaluate((position) => window.scrollTo(0, position), currentPosition);
    await page.waitForTimeout(scrollDelay);
    scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  }
}

async function saveContents(page, url, outputFormat) {
  try {
    log(`Navigating to content URL: ${url}`);
    await page.goto(url, { waitUntil: "networkidle" });

    // 保存先ディレクトリを設定
    const baseDir = outputFormat === "png" ? "../contents_png" :  outputFormat === "webm" ? "../contents_video" : "../contents";
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
    } else if (outputFormat == "webm" ) {
      const tempDir = path.join(__dirname, "../temp_video");
      fs.mkdirSync(tempDir, { recursive: true });

      log("Starting video recording");
      const context = await page.context().browser().newContext({
        recordVideo: {
          dir: tempDir,
          size: { width: 1280, height: 720 }
        }
      });

      const recordingPage = await context.newPage();
      await recordingPage.goto(url, { waitUntil: "networkidle" });
      await scrollPage(recordingPage);  // ページをスクロール

      await context.close();  // これによりビデオファイルが保存される

      // 保存されたビデオファイルを見つけてリネーム
      const tempVideoFiles = fs.readdirSync(tempDir);
      if (tempVideoFiles.length > 0) {
        const tempVideoPath = path.join(tempDir, tempVideoFiles[0]);
        const fileName = savePath.endsWith("/") ? "index.webm" :
          (savePath.endsWith(".webm") ? path.basename(savePath) : `${path.basename(savePath)}.webm`);
        const filePath = path.join(path.dirname(savePath), fileName);

        log(`Renaming video file to: ${filePath}`);
        fs.renameSync(tempVideoPath, filePath);

        log(`Saved video from ${url} to ${filePath}`);
        return filePath;
      } else {
        throw new Error("Video file not found after recording");
      }
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
