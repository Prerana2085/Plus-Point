const express=require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const { isLoggedin, updateProfile } = require("../controllers/userProfileController");

const userProfileRouter=express.Router();

userProfileRouter.get('/profile',authMiddleware,isLoggedin);
userProfileRouter.put('/update-profile',updateProfile,authMiddleware);
// userProfileRouter.post('/',authMiddleware, authController);

module.exports=userProfileRouter;