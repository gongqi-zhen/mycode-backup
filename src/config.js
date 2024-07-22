require("dotenv").config();

const config = {
  username: process.env.APP_USERNAME,
  password: process.env.APP_PASSWORD,
  secretAnswer: process.env.APP_SECRET_ANSWER,
};

module.exports = config;