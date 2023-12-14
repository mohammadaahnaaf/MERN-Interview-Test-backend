const {mongoURI} = require("../config");

const mongoose = require("mongoose");
const dbConnect = async () => {
  console.log("Connecting...");
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Alhamdulillah! DB Connected");
    })
    .catch(() => console.log("DB Connection Failed"));
};
module.exports = dbConnect;