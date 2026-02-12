import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

//
// GET all products
//
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products" });
  }
});

//
// ADD product
//
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({
      message: "Error adding product",
    });
  }
});

//
// DELETE product
//
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(
      req.params.id
    );
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed",
    });
  }
});

export default router;
