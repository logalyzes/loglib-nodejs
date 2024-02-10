const express = require("express");
const { Logger } = require("logalayze-logger");

const app = express();

const logger = new Logger("0.0.0.0:8080");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
