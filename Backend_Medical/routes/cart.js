// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const { getCartItems, updateCartItem } = require("../controllers/cartController");
const Cart = require('../models/Cart');  // Ensure this path is correct


router.post("/add", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const productIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity += 1;
    } else {
      cart.items.push({ productId, quantity: 1 });
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ message: "Failed to add product to cart", error });
  }
});

router.get('/:userId', getCartItems);

router.post("/update", updateCartItem);

module.exports = router;
