const express = require("express");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/index.js");
const cookieParser = require("cookie-parser");

const app = express();
// app.use(cookieParser);

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", router);

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Connnected to DB");
    console.log("Server is running at " + PORT);
  });
});
