const mongoose=require("mongoose");
const validator=require('validator');
const userSchema =  mongoose.Schema({
  name:{
    type: String,
    required: [true, "Name is require"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: function(v) {
        return validator.isEmail(v);
      },
      message: 'Please enter a valid email'
    }
  },
  role:{
    type:String,
    required:true,
    enum:['admin','doctor','user'],
    // default:"user",
  }
});
const userModel=mongoose.model('Hospital_Data', userSchema);
module.exports=userModel;
  
//   pass: {
//     type: Number,
//     required: [true, "Password is required"]
//   },
//   cpass: {
//     type: Number,
//     required: [true, "Please confirm your password"]
//   },
//   mobile: {
//     type: Number,
//     required: [true, 'Mobile Number is Required']
//   },