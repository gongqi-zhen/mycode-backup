const fs = require("fs");
const path = require("path");
const log = require("./logger");

function generateIndexHtml(links) {
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
