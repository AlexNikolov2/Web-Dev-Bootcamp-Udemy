const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost:27017/testApp")
  .then(() => {
    console.log("OPEN CONNECTION!");
  })
  .catch((err) => {
    console.log("FAILED!");
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/dog", (req, res) => {
  res.send("WOOF");
});

app.listen(3000, () => {
  console.log("App is listening on 3000");
});
