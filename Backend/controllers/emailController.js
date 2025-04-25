const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user:process.env.EMAIL_USER,
                //princekumarsingh9875@gmail.com
                  // Your email
                pass: process.env.EMAIL_PASS, // App Password (not normal password)
            },
        });
   // 1st debug for email debugg
        // const mailOptions = {
        //     from: `"Plus Point Support" <${process.env.EMAIL_USER}>`,//process.env.EMAIL_USER,
        //     to:  email,
        //     subject: "Thank You for Contacting Us!",
        //     text: "We appreciate your message and will get back to you soon.",
        // };

        // commented this code for improvement of the css inn text msg 
        // from chatgpt 3/16/2025

        // const mailOptions = {
        //     from: `"Plus Point Support" <${process.env.EMAIL_USER}>`,
        //     to: email,
        //     subject: "Thank You for Contacting Us!",
        //     html: `
        //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 8px; background-color: #f9f9f9; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
        //             <div style="text-align: center; padding: 10px; background-color: #0073e6; border-radius: 8px 8px 0 0;">
        //                 <h2 style="color: #ffffff; margin: 0;">Thank You for Contacting Us!</h2>
        //             </div>
        //             <div style="padding: 20px;">
        //                 <p style="font-size: 16px; color: #333;">Hello <b>${name}</b>,</p>
        //                 <p style="font-size: 16px; color: #555;">
        //                     We appreciate your message and our team will get back to you as soon as possible.
        //                 </p>
        //                 <p style="font-size: 16px; color: #555;">
        //                     If you need immediate assistance, feel free to <a href="mailto:support@yourwebsite.com" style="color: #0073e6; text-decoration: none; font-weight: bold;">contact our support team</a>.
        //                 </p>
        //                 <div style="margin-top: 20px; text-align: center;">
        //                     <a href="https://yourwebsite.com" style="display: inline-block; background-color: #0073e6; color: white; padding: 10px 20px; font-size: 16px; border-radius: 5px; text-decoration: none;">
        //                         Visit Our Website
        //                     </a>
        //                 </div>
        //             </div>
        //             <div style="text-align: center; padding: 10px; background-color: #eee; border-radius: 0 0 8px 8px; font-size: 12px; color: #777;">
        //                 &copy; 2025 Plus Point Support. All Rights Reserved.
        //             </div>
        //         </div>
        //     `,
        // };


        // 3rd email from debug


        const mailOptions = {
            from: `"Plus Point Support" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Thank You for Contacting Us!",
            html: `
                <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
                    <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
                        <h2 style="color: #333;">Thank You for Contacting Us!</h2>
                        <p style="font-size: 16px; color: #555;">We appreciate your message and will get back to you soon.</p>
                        <hr style="border: 0; height: 1px; background: #ddd; margin: 20px 0;">
                        <p style="font-size: 14px; color: #777;">If you have any urgent queries, feel free to reply to this email.</p>
                        <p style="margin-top: 20px;">
                            <a href="https://yourwebsite.com" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Visit Our Website</a>
                        </p>
                    </div>
                </div>
            `,
        };
        
        
        



        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:",error);
        res.status(500).json({ message: "Email sending failed", error:error.message });
    }
};

module.exports = sendEmail ;
