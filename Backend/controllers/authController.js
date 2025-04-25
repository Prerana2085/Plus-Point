// const express=require("express")
// const userModel=require('../models/userModel')

// const authController = async (req,res) =>{
//     try{
//         const user=await userModel.findOne({_id:req.body.userId});
//         if(!user) return res.status(200).send({message:'user not found', success:false});
//         else{
//             res.status(200).send({
//                 success:true,
//                 data:{
//                 name:user.name,
//                 email:user.email,
//             }});
//         }
//     }catch(err){
//         res.status(200).send({messsage:`auth error`, success:false})
//     }
// }

// module.exports=authController;