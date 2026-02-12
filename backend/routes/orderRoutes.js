import express from "express";
import Order from "../models/Order.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Create order
router.post("/", protect, async (req, res) => {
  try {
    const order = new Order({
      ...req.body,
      user: req.user,
    });

    const saved = await order.save();
    res.json(saved);
  } catch {
    res.status(500).json({ message: "Order failed" });
  }
});

// Get user's orders
router.get("/", protect, async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user,
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch {
    res.status(500).json({ message: "Fetch failed" });
  }
});

export default router;
