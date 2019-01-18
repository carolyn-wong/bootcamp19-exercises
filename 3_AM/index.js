const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/bird1", (req, res) => {
  res.sendFile(path.join(__dirname + "/bird1.html"));
});

app.get("/bird2", (req, res) => {
  res.sendFile(path.join(__dirname + "/bird2.html"));
});

app.get("/bird3", (req, res) => {
  res.sendFile(path.join(__dirname + "/bird3.html"));
});

app.listen(3000);
console.log("Running at port 3000");
