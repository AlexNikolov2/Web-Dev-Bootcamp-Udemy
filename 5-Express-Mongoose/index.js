const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/dog", (req, res) => {
  res.send("WOOF");
});

app.listen(3000, () => {
  console.log("App is listening on 3000");
});
