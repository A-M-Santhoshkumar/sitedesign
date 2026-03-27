import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // ✅ Check ENV
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing EMAIL_USER or EMAIL_PASS");
      return NextResponse.json(
        { message: "Email service not configured." },
        { status: 500 }
      );
    }

    // ✅ Parse body
    const body = await req.json();
    const { name, email, phone, city, message } = body;

    // ✅ Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name?.trim())
      return NextResponse.json({ message: "Name is required." }, { status: 400 });

    if (!email?.trim() || !emailRegex.test(email))
      return NextResponse.json({ message: "Valid email is required." }, { status: 400 });

    if (!phone?.trim() || !phoneRegex.test(phone.replace(/\s/g, "")))
      return NextResponse.json(
        { message: "Valid 10-digit phone number is required." },
        { status: 400 }
      );

    if (!message?.trim())
      return NextResponse.json({ message: "Message is required." }, { status: 400 });

    // ✅ Transporter (PRODUCTION SAFE)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send Mail
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // you receive mail
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;">
          <h2>New Contact Form Submission</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>City:</b> ${city || "Not provided"}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("❌ Server Error:", error);
    return NextResponse.json(
      { message: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
}