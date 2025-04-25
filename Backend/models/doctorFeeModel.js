const mongoose=require('mongoose');
const doctorFeeModel=mongoose.Schema({
    Name:{
        type:String,
        require:true
    }
})