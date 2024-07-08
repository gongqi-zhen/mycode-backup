const log = require("./logger");

async function loginToMyCode(page, username, password, secretAnswer) {
  try {
    log("Navigating to login page");
    await page.goto("https://mycode.jp/login.html?int=gmenu");

    log("Filling in login credentials");
    await page.fill("#email", username);
    await page.fill("#pwd", password);
    await page.click("#btn-login");

    log("Waiting for secret question page");
    await page.waitForSelector("#security_question_answer", { timeout: 60000 });

    log("Filling in secret question answer");
    await page.fill("#security_question_answer", secretAnswer);
    await page.click("#submit-default");

    log("Navigating to a specific page after secret answer");
    await page.goto("https://mycode.jp/", { waitUntil: "load" });
  } catch (error) {
    log(`Error during login: ${error.message}`);
    throw error;
  }
}

module.exports = loginToMyCode;
