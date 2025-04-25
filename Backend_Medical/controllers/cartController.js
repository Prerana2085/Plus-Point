const Cart = require("../models/Cart");
const Product = require("../models/Product");

const getCartItems = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json({ items: cart.items });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ message: "Error fetching cart items" });
  }
};

const updateCartItem = async (req, res) => {
  const { userId, productId, action, quantity } = req.body;
  
  try {
    let cart = await Cart.findOne({ userId });

    // If cart does not exist, create a new one
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const productInCart = cart.items.find(item => item.productId.toString() === productId);

    if (!productInCart && action !== "remove") {
      return res.status(400).json({ message: "Product not in cart" });
    }

    switch (action) {
      case "increase":
        productInCart.quantity += 1;
        break;

      case "decrease":
        if (productInCart.quantity > 1) {
          productInCart.quantity -= 1;
        } else {
          // Only remove the product if quantity reaches 0 after decrease
          cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        }
        break;

      case "update":
        if (quantity > 0) {
          productInCart.quantity = quantity;
        } else {
          return res.status(400).json({ message: "Quantity must be greater than zero" });
        }
        break;

      case "remove":
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        break;

      default:
        return res.status(400).json({ message: "Invalid action" });
    }

    // Save the updated cart
    await cart.save();

    res.status(200).json({
      success: true,
      message: action === "remove" ? "Product removed from cart" : "Cart updated successfully",
      cartItems: cart.items,
    });
  } catch (error) {
    console.error("Error updating cart item:", error);
    res.status(500).json({ message: "Error updating cart item" });
  }
};

module.exports = { getCartItems, updateCartItem };
