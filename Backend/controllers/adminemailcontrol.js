// new file for working contact button

const nodemailer = require("nodemailer");

const adminemail = async (req, res) => {
  try {
    const { email,name,message } = req.body;
    console.log(email,name,message)
    

    if (!email || !message) {
      return res.status(400).json({ message: "Should fill Email and Message is required" });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          //princekumarsingh9875@gmail.com
          // Your email
          pass: process.env.EMAIL_PASS, // App Password (not normal password)
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        cc:email,
        subject: "Thank You for Contacting Us!",
        text: message +"from " +email,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      res.status(200)
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ message: "Email sending failed", error: error.message });
    }
  } catch (error) {
    console.log("not sending email", error);
  }
};

module.exports = adminemail;