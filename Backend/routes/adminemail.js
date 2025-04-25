
const express = require("express");
const adminemail = require("../controllers/adminemailcontrol");

const router = express.Router();
router.post("/adminemail",adminemail);
module.exports = router;