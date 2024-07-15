const express = require("express");

const app = express();

app.use("/machence", (req, res, next) => {
  res.send("Oooo macinko");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
