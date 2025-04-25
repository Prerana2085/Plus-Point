// const userModel = require("../models/userModel");

// Check if the user is logged in and retrieve their credentials
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const isLoggedin = async (req, res) => {
  try {
    console.log(req)
    if(!req.user){
      return res.status(401).send({ message: "Unauthorized", success: false });
    }

    // Return user data
    return res.status(200).send({
      success: true,
      data: {
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        // phone: user.phone, // Uncomment if you want to send phone
        // address: user.address, // Uncomment if you want to send address
      },
    });
  } catch (err) {
    console.error("Error fetching user data:", err);
    res.status(500).send({ message: ` this ? Auth error: ${err.message}`, success: false });
  }
};


const updateProfile = async (req, res) => {

  try {
    const { name, email, phone, address } = req.body;
    const token = req.headers.authorization?.split(" ")[1]; // Assuming Bearer token format

    if (!token) {
      return res.status(401).send({ message: "Authorization token required", success: false });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by the decoded user ID
    const user = await userModel.findById(decoded._id);

    if (!user) {
      return res.status(404).send({ message: "User not found", success: false });
    }

    // Only update the fields that are provided
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone; // Optionally update phone
    user.address = address || user.address; // Optionally update address

    // Save the updated user data to the database
    await user.save();

    res.status(200).send({
      success: true,
      message: "Profile updated successfully",
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone, // Send updated phone if provided
        address: user.address, // Send updated address if provided
      },
    });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).send({ message: "Error updating profile", success: false });
  }
};


module.exports = {
  isLoggedin,
  updateProfile
};









// const userModel = require("../models/userModel");

// // Check if the user is logged in and retrieve their credentials
// const isLoggedin = async (req, res) => {
//   try {
//     const userId=req.query.userId;
//     const user = await userModel.findOne({ _id: userId });

//     if (user) {
//       res.status(200).send({
//         success: true,
//         data: {
//           name: user.name,
//           email: user.email,
//           role:user.role,
//         //   phone: user.phone,
//         //   address: user.address,
//         //   appointments: user.appointments || [],
//         //   [
//         //     { doctor: 'Dr. Smith', date: '2024-12-12', time: '10:00 AM', status: 'Confirmed' },
//         //     { doctor: 'Dr. John', date: '2024-12-15', time: '2:00 PM', status: 'Pending' },
//         //   ],
//         },
//       });
//     } else {
//       res.status(404).send({ message: "No active user found, Kindly Login first", success: false });
//     }
//   } catch (err) {
//     res.status(500).send({ message: `Auth error: ${err.message}`, success: false });
//   }
// };

// // Update user profile
// const updateProfile = async (req, res) => {
//   try {
//     const { _id, name, email } = req.body;

//     const user = await userModel.findOne({ _id:_id });

//     if (!user) {
//       return res.status(404).send({ message: 'User not found', success: false });
//     }

//     // Update the user profile data
//     user.name = name || user.name;
//     user.email = email || user.email;
//     // user.role = role || user.role;
//     // user.phone = phone || user.phone;
//     // user.address = address || user.address;

//     await user.save();  // Save the updated user data to the database

//     res.status(200).send({
//       success: true,
//       message: 'Profile updated successfully',
//       data: {
//         name: user.name,
//         email: user.email,
//         // role:user.role,
//         // phone: user.phone,
//         // address: user.address,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ message: 'Error updating profile', success: false });
//   }
// };

// module.exports = {
//   isLoggedin,
//   updateProfile
// };
