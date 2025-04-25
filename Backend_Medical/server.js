const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path');

const cartRoutes = require('./routes/cart');
const Product = require('./models/Product');  

dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/cart', cartRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));
// changing for the db connection 3/11/2025
//mongoose
  //.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  //.then(() => console.log("Connected to MongoDB"))
  //.catch((err) => console.error("Error connecting to MongoDB:", err));
  // writing from chat gpt in the place of commented code
  const mongoURI = process.env.MONGO_URL;  // Use MONGO_URL instead of MONGODB_URI
if (!mongoURI) {
  console.error("Error: MONGO_URL is not defined in .env file.");
  process.exit(1);
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

  // till here the new code from chat gpt 


app.get("/api/categories", async (req, res) => {
  try {
    const categories = await Product.distinct("category");
    res.json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

app.get("/api/products", async (req, res) => {
  const { category } = req.query;
  try {
    const products = await Product.find(category ? { category } : {});
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    console.log(product.imageUrl); 
    res.json(product);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ message: 'Error fetching product details' });
  }
});

const MINIMUM_AMOUNT = 50; 

app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { items, userId } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "No items provided for checkout." });
    }

    const totalAmount = items.reduce((acc, item) => acc + (item.productId.price * item.quantity), 0);

    if (totalAmount < MINIMUM_AMOUNT) {
      return res.status(400).json({
        error: `The total amount must be at least ₹${MINIMUM_AMOUNT}.00 to proceed with checkout.`,
      });
    }

    const lineItems = items.map(item => ({
      price_data: {
        currency: "inr", 
        product_data: {
          name: item.productId.name,
          description: item.productId.description,
        },
        unit_amount: item.productId.price * 100, 
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],  
      line_items: lineItems,
      mode: "payment",
      success_url: `https://plus-point.onrender.com/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://plus-point.onrender.com/cart`,
      metadata: { userId }, 
    })

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
