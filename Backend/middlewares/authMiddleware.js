const jwt=require('jsonwebtoken');
const userModel = require("../models/userModel")


module.exports= async (req,res,next)=>{
    try {
        console.log("headers",req.headers)
        if(!req.headers.authorization){
            return res.status(400).json({
                message:'Auth token not found',
            })
        }
        console.log("headers",req.headers)

        const bearereToken = req.headers.authorization
        console.log(bearereToken);

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
        req.body.userId = decoded.id;
        req.body.role = decoded.role;
        console.log(decoded.id,decoded.role)
        const user = await userModel.findOne({_id:decoded.id});
        if(!user){
            return res.status(400).json({
                message:'User not found',
                success:false
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:'auth error',
            success:false
        })
    }
}