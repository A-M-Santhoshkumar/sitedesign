// api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, phone, city, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Configure your mail transporter (use your Gmail credentials or App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
       
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: email,
      to: "a.m.santhoshkumar02@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        City: ${city}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email", error });
  }
}
