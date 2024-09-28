const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded());

mongoose
  .connect("mongodb://localhost:27017/farmApp")
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

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.get("/products/create", (req, res) => {
  res.render("products/create");
})

app.post("/products", async(req, res) => {
  console.log(req.body);
  const newProduct = new Product(req.body);

  
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
})

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById({ _id: id });
  res.render(`products/product`, { product });
});

app.get("/products/:id/edit", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  res.render('products/update', {product});
})

app.put("/products/:id/edit", async (req, res) => {
  const newProduct = new Product(req.body);
  
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
})


app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect('/products');
})



app.listen(3000, () => {
  console.log("App is listening on 3000");
});
