// const express = require("express");
// const sendEmail = require("../controllers/emailController.js");

// const router = express.Router();

// router.post("/send-email", sendEmail);

// module.exports = router;


// for the seding email this is improved code from chatgpt 3/13/2025


// const express = require("express");
// const dotenv = require("dotenv");
// const sendEmail = require("../controllers/emailController"); 
// const emailRoutes = require("./routes/emailRoutes"); // Importing the email route

// dotenv.config(); // Load environment variables
// const router = express.Router();

// const app = express();

// // Middleware to parse JSON requests
// app.use(express.json()); 

// // Use the email route
// app.use("/api", emailRoutes);  // This makes "/api/send-email" available

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// code form chatgpt for email routes.js with 3/13/2025


// const express = require("express");
// const sendEmail = require("../controllers/emailController"); // Correct path

// const router = express.Router();

// // Define the email sending route
// router.post("/send-email", sendEmail);

// module.exports = router;


const express = require("express");
const sendEmail = require("../controllers/emailController"); // Correct path
const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRole = require("../middlewares/authorize");

const router = express.Router();

// Define the email sending route
router.post("/send-email", authMiddleware,sendEmail);

module.exports = router;

