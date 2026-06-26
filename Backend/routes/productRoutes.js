const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.post("/add", async (req, res) => {

  try {

    const product =
      new Product(req.body);

    await product.save();

    res.json({
      message: "Product Added"
    });

  } catch (err) {

    res.status(500).json(err);

  }

});

router.get("/", async (req, res) => {

  const products =
    await Product.find();

  res.json(products);

});

router.get("/:id", async (req, res) => {

  const product =
    await Product.findById(
      req.params.id
    );

  res.json(product);

});

module.exports = router;
