const express=require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const authController = require("../controllers/authController");

const getUserDataRouter=express.Router();
 
getUserDataRouter.get('/',authMiddleware);
module.exports=getUserDataRouter;