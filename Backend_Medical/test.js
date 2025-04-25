const dotenv = require("dotenv");
dotenv.config();

console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);
