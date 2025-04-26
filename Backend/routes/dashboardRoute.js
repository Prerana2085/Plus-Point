const express = require('express');
const authorizeRole = require('../middlewares/authorize');
const DoctorModel = require('../models/DoctorModel');

const router = express.Router();

router.get("/admin-only", authorizeRole("admin"), (req, res) => {
    res.status(200).json({ message: "Welcome to the admin area!" });
});

router.post("/addDoctor", authorizeRole("admin"), async (req, res) => {
    console.log(req.body);
    const { name, email, password, specialization, phone } = req.body;

    try {
        const newDoctor = await DoctorModel.create({
            name,
            email,
            password,
            specialization,
            phone
        });
        res.status(201).json({ message: "Doctor added successfully", doctor: newDoctor });
    } catch (error) {
        res.status(500).json({ message: "Error adding doctor", error: error.message });
    }
});


router.get("/count", authorizeRole("admin"), async (req,res)=>{
    try {
        const count = await DoctorModel.countDocuments({});
        res.status(200).json({ message: "Doctor count fetched successfully", count });
    } catch (error) {
        res.status(500).json({ message: "Error fetching doctor count", error: error.message });
    }
})











router.get("/getAllDoctors", authorizeRole("admin"), async (req, res) => {
    try {
        const doctors = await DoctorModel.find({});
        res.status(200).json({ message: "Doctors fetched successfully", doctors });
    } catch (error) {
        res.status(500).json({ message: "Error fetching doctors", error: error.message });
    }
})












 module.exports = router;