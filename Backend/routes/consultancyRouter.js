const express = require('express');
const ConsultancyData = require('../models/ConultancyModel');
const { token } = require('morgan');

// POST endpoint to save consultancy data
// router
const router = express.Router();
router.get('/', async (req, res) => {
    try {
      const consultancyEntries = await ConsultancyData.find(); // Get all entries from consultancyData collection
    //   console.log("Consultancy Data Fetched:", consultancyEntries);

    //   res.json(consultancyEntries);  // Respond with the fetched data
      res.status(200).send(JSON.stringify(consultancyEntries))
    } catch (err) {
      res.status(500).json({ message: 'Error fetching consultancy data', error: err.message });
    }
  });

  router.post('/', async (req, res) => {
  const { name, age, address, gender, disease, doctor, dateOfAppointment, timing, mobile, email, token} = req.body;
  // console.log("Incoming Consultancy Data:", req.body);

  // const token = generateToken();

  try {
    const response = new ConsultancyData({
      name,
      age,
      address,
      gender,
      disease,
      doctor,
      dateOfAppointment,
      timing,
      mobile,
      email,
       token,
      // fee
    });

    console.log("Consultancy Data Object:", response);
    // Check if the doctor is available for the selected date and time
    const existingAppointment = await ConsultancyData.findOne({
      doctor,
      dateOfAppointment,
      timing,
    });
    if (existingAppointment) {
      return res.status(400).json({ message: 'Doctor is already booked for this date and time' });
    }

    // Save the new consultancy data to the database
    await response.save();
    console.log("Consultancy Data Saved:", response);


    // Save the consultancy data in the database
    // await ConsultancyData.save();
    
    res.status(201).json({ message: 'Consultation booked successfully', data: response });
  } catch (err) {
    res.status(400).json({ error: 'Error booking consultation', message: err.message });
  }
});

// Function to generate a unique token (for example purposes)
function generateToken() {
  return Math.floor(1000 + Math.random() * 9000);
}

module.exports = router;
