const express = require("express");
const dbConnect = require("./db/db");
const cors = require("cors");
const { PORT } = require("./config");
const router = require("./routes/dRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
dbConnect();

// routes
app.use(router);

app.use("*", (req, res) => {
  res.status(404).send({
    message: "Route not found",
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
