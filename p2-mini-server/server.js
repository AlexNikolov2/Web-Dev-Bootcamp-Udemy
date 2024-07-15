const express = require("express");

const app = express();

app.use(() => {
  console.log("new request fc");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
