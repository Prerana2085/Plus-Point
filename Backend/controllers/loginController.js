const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  // Validate request body
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    // Check if JWT_SECRETKEY is defined
    if (!process.env.JWT_SECRETKEY) {
      return res.status(500).send({ message: "Server configuration error" });
    }

    const token = jwt.sign({ id: user._id, role:user.role }, process.env.JWT_SECRETKEY, {
      // expiresIn: "1h",
    });
    res
      .status(200)
      .send({
        message: `Login successful, Hi ${user.name} and ${user.role}`,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        success: true,
        token,
      });
  } catch (err) {
    console.error(err); // Use console.error for better error logging
    res.status(500).send({ message: `Error while logging in: ${err.message}` });
  }
};

module.exports = loginController;
