require("dotenv").config();
module.exports = {
  mongoURI: process.env.MONGO_URI,
  PORT: process.env.PORT || 3000,
};
