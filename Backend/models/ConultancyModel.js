const mongoose = require('mongoose');
// const { token } = require('morgan');

const ConsultancyDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true, enum: ['Male', 'Female'] },
  disease: { type: String, required: true },
  doctor: { type: String, required: true },
  dateOfAppointment: { type: Date, required: true },
  timing: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  token : { type: String, required: true },
  // fee: { type: Number, required: true }
});

const ConsultancyData = mongoose.model('ConsultancyData', ConsultancyDataSchema);
module.exports = ConsultancyData;
