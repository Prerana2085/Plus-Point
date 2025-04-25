const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const sha256 = require("sha256");
const uniqid = require("uniqid");
const main = require('./dbconnection');
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
const consultancyRouter = require("./routes/consultancyRouter");
const emailRoutes = require("./routes/emailRoute");
const adminRoutes = require("./routes/adminemail");
const userProfileRouter = require("./routes/userProfileRouter")
const dahsboardRouter = require("./routes/dashboardRoute");
const ambulanceRoute = require("./routes/ambulanceRoute");
const doctorRouter = require("./routes/doctorRoute")
// const { main } = require("./dbConnection");  // Import main() function from dbConnection
require('dotenv').config();

// Middleware
// const logger = require("./middlewares/log");

// creating express application
const app = express();


// UAT environment
const MERCHANT_ID = "PGTESTPAYUAT";
const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const SALT_INDEX = 1;
const SALT_KEY = process.env.SALT_KEY;
const APP_BE_URL = "http://localhost:3002"; // our application


// setting up middleware
// app.use(logger);
app.use(cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Defining a test route
app.get("/", (req, res) => {
  res.send("PhonePe Integration APIs!");
});

app.use('/Consultancy', consultancyRouter);
app.use("/Register", registerRouter);
app.use("/Login", loginRouter);
app.use("/api", emailRoutes);
app.use("/admin",adminRoutes);
app.use("/user",userProfileRouter);
app.use("/api",dahsboardRouter);
app.use("/ambulance", ambulanceRoute);
app.use("/doctor", doctorRouter);

// const users = {
//   'email@user1.com': {
//     name: 'User Name',
//     email: 'email@user1.com',
//     phone: '9999999999',
//   },
// };

// JWT token Secret Key Here 


// let user = null;
// const verifyToken = async (req, res, next) => {
//   const token = req.headers['authorization']?.split(' ')[1];
//   if (!token) return res.status(403).json({ message: 'No token provided.' });

//   try {
//     const decoded = jwt.decode(token, process.env.JWT_SECRETKEY);
//     console.log(`ye h decoded token : , ${JSON.stringify(decoded)}`);
//     user = await userModel.findById(decoded.id); // Use the decoded userId
//     console.log(`User hu m: , ${JSON.stringify(user)}`)
//     if (!user) {
//       return res.status(404).send({ message: "No active user found, Kindly Login first", success: false });
//     }
//     // res.status(200).send('User found');
//     res.status(200).send(user);
//     // res.user=user;
//     // req.user = user;
//     // next();
//   } catch (err) {
//     console.error("Error fetching user data:", err);
//     return res.status(500).send({ message: `Auth error: ${err.message}`, success: false });
//   }
// };

// // Route to get user info after token verification
// app.get('/user', verifyToken, (req, res) => {
//   console.log("this is user", user);

//   // user = req.user;  // The user data is available here after passing through the verifyToken middleware
//   res.status(200).json({
//     success: true,
//     data: {
//       name: user.name,
//       email: user.email,
//       role: user.role,  // Include other relevant fields
//     }
//   });
// });





// endpoint to initiate a payment
app.get("/pay", async function (req, res, next) {
  // Initiate a payment
  const amount = +req.query.amount;  // Transaction amount
  let userId = "MUID123";  // Example user ID
  let merchantTransactionId = uniqid();  // Generate unique transaction ID

  let normalPayLoad = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: userId,
    amount: amount * 100,  // converting to paise
    redirectUrl: `${APP_BE_URL}/payment/validate/${merchantTransactionId}`,
    redirectMode: "REDIRECT",
    mobileNumber: "9999999999",
    paymentInstrument: { type: "PAY_PAGE" },
  };

  let bufferObj = Buffer.from(JSON.stringify(normalPayLoad), "utf8");
  let base64EncodedPayload = bufferObj.toString("base64");

  let string = base64EncodedPayload + "/pg/v1/pay" + SALT_KEY;
  let sha256_val = sha256(string);
  let xVerifyChecksum = sha256_val + "###" + SALT_INDEX;

  axios
    .post(
      `${PHONE_PE_HOST_URL}/pg/v1/pay`,
      { request: base64EncodedPayload },
      {
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerifyChecksum,
          accept: "application/json",
        },
      }
    )
    .then(function (response) {
      console.log("response->", JSON.stringify(response.data));
      res.redirect(response.data.data.instrumentResponse.redirectInfo.url);
    })
    .catch(function (error) {
      res.send(error);
    });
});

// endpoint to check the status of payment
app.get("/payment/validate/:merchantTransactionId", async function (req, res) {
  const { merchantTransactionId } = req.params;
  if (merchantTransactionId) {
    let statusUrl =
      `${PHONE_PE_HOST_URL}/pg/v1/status/${MERCHANT_ID}/` + merchantTransactionId;

    let string =
      `/pg/v1/status/${MERCHANT_ID}/` + merchantTransactionId + SALT_KEY;
    let sha256_val = sha256(string);
    let xVerifyChecksum = sha256_val + "###" + SALT_INDEX;

    axios
      .get(statusUrl, {
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerifyChecksum,
          "X-MERCHANT-ID": merchantTransactionId,
          accept: "application/json",
        },
      })
      .then(function (response) {
        console.log("response->", response.data);
        if (response.data && response.data.code === "PAYMENT_SUCCESS") {
          res.send(response.data);
        } else {
          res.send("Payment failed or pending.");
        }
      })
      .catch(function (error) {
        res.send(error);
      });
  } else {
    res.send("Error: Invalid Transaction ID");
  }
});

// Establish DB connection and start server
const startServer = async () => {
  // await main;  // Wait for the DB connection to be established
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

// Start the server with DB connection
startServer();
main();