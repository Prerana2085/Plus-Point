const express = require("express");
const router = express.Router();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = twilio(accountSid, authToken);

router.post(`/2010-04-01/Accounts/${accountSid}/Calls`, async (req, res) => {
    console.log("Api hit");
    try {
        console.log("hello")
        // const { to } = req.body;

        const call = await twilioClient.calls.create({
            to:'+918988976191',
            from: '+13363482353',
            url: ' https://api.twilio.com/2010-04-01/Accounts/AC9c5bc40d70deddac9275d8792033359b/Calls.json' // TwiML for call
        });
        // console.log(call.from)7

        res.status(200).json({ message: "Call initiated", sid: call.sid });
    } catch (error) {
        console.error("Error initiating call:", error.message);
        res.status(402).json({ error: error.message,message:"error aa raha h" });
    }
});

module.exports = router;