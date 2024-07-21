const fs = require("fs");
const path = require("path");
const log = require("./logger");

function generateIndexHtml(categories, outputFormat) {
  try {
    const baseDir = outputFormat === "png" ? "../contents_png" :  outputFormat === "webm" ? "../contents_video" : "../contents";
    const indexPath = path.join(__dirname, baseDir, "index.html");
    const cssFileName = outputFormat === "png" ? "style_png.css" : outputFormat === "webm" ? "style_video.css" : "style.css";
    const cssPath = path.join(__dirname, cssFileName);
    const relativeCssPath = path.relative(path.dirname(indexPath), cssPath);

    let htmlContent = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MYCODE Pages Index</title>
        <link rel="stylesheet" href="${relativeCssPath}">
      </head>
      <body>
        <header>
          <h1>MYCODE Pages Index</h1>
        </header>
        <main>
    `;

    categories.forEach(category => {
      htmlContent += `
        <section>
          <h2>${category.title}</h2>
          <ul>
      `;
      category.links.forEach(link => {
        const urlPath = new URL(link.url).pathname;
        const savePath = path.join(__dirname, baseDir, urlPath);
        const fileName = savePath.endsWith("/") ? `index.${outputFormat}` :
          (savePath.endsWith(`${outputFormat}`) ? path.basename(savePath) : `${path.basename(savePath)}.${outputFormat}`);
        const filePath = path.join(path.dirname(savePath), fileName);
        htmlContent += `<li><a href="${filePath}">${link.name}</a></li>\n`;
      });
      htmlContent += `
          </ul>
        </section>
      `;
    });

    htmlContent += `
        </main>
      </body>
      </html>
    `;

    log(`Saving index to file: ${indexPath}`);
    fs.writeFileSync(indexPath, htmlContent);
    log(`Saved index to ${indexPath}`);
  } catch (error) {
    log(`Failed to generate index.html: ${error.message}`);
  }
}

module.exports = generateIndexHtml;
