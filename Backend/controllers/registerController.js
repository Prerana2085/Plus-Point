

const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { redirect } = require("react-router-dom");

const registerController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .send({ message: "User already registered", success: false });
    }
    if(!role || !name || !email || !password){
      return res.status(400).send({ message: "All fields are required", success: false });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object with the hashed password
    const newUser = new userModel({
      name,
      email,
      role,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("user saved",newUser.toObject())

    const token = jwt.sign({ id: newUser._id, role:newUser.role }, process.env.JWT_SECRETKEY, {
      expiresIn: "1d",
    });
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      success: true,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Somethng went wrong while Register" });
  }
};

module.exports = registerController;

