const express = require("express");
const authorizeRole = require("../middlewares/authorize");
// const AppointmentModel = require("../models/appointmentModel");
const DoctorModel = require("../models/DoctorModel");
const ConsultancyData = require("../models/ConultancyModel");

const router = express.Router();

router.get("/doctor-only",authorizeRole("doctor"),(req,res)=>{
    try {
        const doctorName = req.user.name;
        // console.log(doctorName);
        res.status(200).json({doctorName})
    } catch (error) {
        res.status(500).json({ message: error.message },"error in doctor route")
    }
})
router.get("/appointments/:doctor",authorizeRole("doctor"), async (req, res) => {
    const { doctor } = req.params;
    // console.log(doctor)
    try {
        const appointments = await ConsultancyData.find({
            doctor: { $regex: new RegExp(`^${doctor}$`, "i") } // exact case-insensitive match
        });;
        if (!appointments) {
            return res.status(404).json({ message: "No appointments found" });
        }
        // console.log(doctorName);
        console.log(appointments);
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message, error: "error fetching doctor appointments"});
    }
});


router.get("/profile/:doctor", authorizeRole("doctor"), async (req, res) => {
    const { doctor } = req.params;
    try {
      const doctorProfile = await DoctorModel.findOne({
        name: { $regex: new RegExp(`^${doctor}$`, "i") }
      });
      if (!doctorProfile) {
        return res.status(404).json({ message: "Doctor profile not found" });
      }
      res.status(200).json({ profile: doctorProfile });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });











module.exports = router;