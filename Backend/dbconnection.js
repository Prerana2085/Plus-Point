const mongoose = require("mongoose");
require('dotenv').config();  // Make sure dotenv is loaded correctly

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Database");
  } catch (err) {
    console.error(`Some error occurred while connecting with the database: ${err}`);
  }
};
module.exports = main ;
// module.exports=main;
// // const connection =()=>{
// //      mongoose.connect(
  
// // );
// export const dbConnection=()=>{
//     mongoose.connect(process.env.MONGO_URL,{
//         dbName:"MERN_Hospital"
//     }).then(()=>{
//         console.log("Connected to Database")
//     }).catch(err=>{
//         console.log(`Some error occured while connecting  to the database: ${err}`);
//     })
// }]
