const moongose = require("mongoose"); 

const doctorSchema = new moongose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    specialization:{type:String, required:true},
    phone:{type:String, required:true},
})

const DoctorModel = moongose.model("DoctorModel", doctorSchema);
module.exports = DoctorModel;