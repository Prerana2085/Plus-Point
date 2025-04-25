
const express=require('express');
// const loginController = require("../controllers/loginController");
const loginController=require('../controllers/loginController')
const loginRouter=express.Router();
loginRouter.post('/',loginController);
loginRouter.get('/', ()=>{
    console.log(`Login Page `);
})
module.exports=loginRouter;