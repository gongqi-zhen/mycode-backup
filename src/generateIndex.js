const fs = require("fs");
const path = require("path");
const log = require("./logger");

function generateIndexHtml(links) {
  try {
    const indexPath = path.join(__dirname, "../contents", "index.html");
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

    log(`Saving index to file: ${indexPath}`);
    fs.writeFileSync(indexPath, htmlContent);
    log(`Saved index to ${indexPath}`);
  } catch (error) {
    log(`Failed to generate index.html: ${error.message}`);
  }
}

module.exports = generateIndexHtml;
