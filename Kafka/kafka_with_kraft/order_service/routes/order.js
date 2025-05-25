const express = require("express");
const router = express.Router();
const sendOrder = require("../producer/sendOrder");


router.post("/order", async (req, res) => {
  try {
    const order = await sendOrder(req.body);
    res.status(201).json({ message: "Order created", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

module.exports = router;
