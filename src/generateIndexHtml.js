const fs = require("fs");
const path = require("path");
const log = require("./logger");

function generateIndexHtml(categories) {
  try {
    const indexPath = path.join(__dirname, "../contents", "index.html");

    let htmlContent = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MYCODE Pages Index</title>
        <style>
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          header {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 1em 0;
          }
          main {
            padding: 2em;
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
          section {
            margin-bottom: 2em;
          }
          h2 {
            color: #2c3e50;
            border-bottom: 2px solid #2c3e50;
            padding-bottom: 0.5em;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin: 0.5em 0;
            padding: 0.5em;
            border-bottom: 1px solid #ddd;
          }
          li:last-child {
            border-bottom: none;
          }
          a {
            text-decoration: none;
            color: #3498db;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
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
        const savePath = path.join(__dirname, "../contents", urlPath);
        const fileName = savePath.endsWith("/") ? "index.html" : 
        (savePath.endsWith(".html") ? path.basename(savePath) : `${path.basename(savePath)}.html`);
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
