const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmApp")
  .then(() => {
    console.log("OPEN CONNECTION!");
  })
  .catch((err) => {
    console.log("FAILED!");
    console.log(err);
  });

const p = new Product({
  name: "Apple",
  price: 1,
  category: "fruit",
});

p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((err) => {
    console.log(err);
  });
