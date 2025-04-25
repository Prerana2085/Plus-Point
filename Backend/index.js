// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const main = require("./dbconnection"); // Ensure this points correctly
// //const { config } = require("dotenv");
// const cookieParser = require("cookie-parser");
// const fileUpload = require("express-fileupload");
// // Load enviornment variables
// // config file is already given written 
// //config({ path: "./config/config.env" });

// // check if enviornment variables are loaded or not
// console.log("PORT:", process.env.PORT);
// console.log("BACKEND_URL:", process.env.BACKEND_URL);
// console.log("FRONTEND_URL:", process.env.FRONTEND_URL);

// const app = express();

// app.use(
//   cors({
//     origin: [process.env.BACKEND_URL, process.env.FRONTEND_URL],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// //start the server

// app.listen(process.env.PORT || 5000, () => {
//   console.log(`Server running at http://localhost:${process.env.PORT ||5001}`);
// });
// main();
// module.exports = app;


// writing the code from chatgpt improved 3/13/2025
 

// checking the code for 3/14/2025 improved version

require("dotenv").config();  // Load .env file
// import express, { json } from "express";
const express = require("express");
const { json } = require("express");
// Debugging: Print environment variables to check if they are loaded
console.log("Checking .env file...");
console.log("PORT:", process.env.PORT);
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);
console.log("BACKEND_URL:", process.env.BACKEND_URL);
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
console.log("MONGO_URL:", process.env.MONGO_URL);




//const dotenv = require("dotenv");
//import emailRoutes from "./routes/emailRoute.js"; 
 // Importing the email route
 const emailRoutes = require("./routes/emailRoute.js");


// dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse JSON requests
app.use(json()); 

// Use the email route
app.use("/api", emailRoutes);  // This makes "/api/send-email" available

// app.use((req, res, next) => {
//     console.log(`Received ${req.method} request for ${req.url}`);
//     next();
// });
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);