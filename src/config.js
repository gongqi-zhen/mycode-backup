require("dotenv").config();

const config = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  secretAnswer: process.env.SECRET_ANSWER,
};

module.exports = config;