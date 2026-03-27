// ✅ FILE PATH: app/api/sendMail/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("EMAIL_USER or EMAIL_PASS is not configured");
      return NextResponse.json({ message: "Email service not configured." }, { status: 500 });
    }

    const body = await req.json();
    const { name, email, phone, city, message } = body as {
      name: string;
      email: string;
      phone: string;
      city?: string;
      message: string;
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name?.trim())
      return NextResponse.json({ message: "Name is required." }, { status: 400 });

    if (!email?.trim() || !emailRegex.test(email))
      return NextResponse.json({ message: "Valid email is required." }, { status: 400 });

    if (!phone?.trim() || !phoneRegex.test(phone.replace(/\s/g, "")))
      return NextResponse.json({ message: "Valid 10-digit phone number is required." }, { status: 400 });

    if (!message?.trim())
      return NextResponse.json({ message: "Message is required." }, { status: 400 });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: "a.m.santhoshkumar02@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${name} — ${phone}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#ec4899,#facc15);padding:20px 24px;">
            <h2 style="color:#fff;margin:0;font-size:18px;">New Contact Form Submission – Sitedesign</h2>
          </div>
          <div style="padding:24px;line-height:1.8;color:#111;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>City:</strong> ${city?.trim() || "Not provided"}</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-line;background:#f9fafb;padding:12px;border-radius:8px;">${message}</p>
          </div>
          <div style="background:#f3f4f6;padding:12px 24px;font-size:12px;color:#6b7280;">
            Sent via your website contact form.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  }
}
