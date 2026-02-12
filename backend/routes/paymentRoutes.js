import express from "express";

const router = express.Router();

// test route
router.get("/", (req, res) => {
  res.send("Payments API working");
});

export default router;
