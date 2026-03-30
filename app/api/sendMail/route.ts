import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing EMAIL_USER or EMAIL_PASS");
      return NextResponse.json({ message: "Email service not configured." }, { status: 500 });
    }

    const body = await req.json();
    const { name, email, phone, city, message } = body;

    // ── Validation ──────────────────────────────────────────────────
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name?.trim())
      return NextResponse.json({ message: "Name is required." }, { status: 400 });
    if (!email?.trim() || !emailRegex.test(email.trim()))
      return NextResponse.json({ message: "Enter a valid email address (e.g. you@gmail.com)." }, { status: 400 });
    if (!phone?.trim() || !phoneRegex.test(phone.replace(/\s/g, "")))
      return NextResponse.json({ message: "Enter a valid 10-digit mobile number (e.g. 9876543210)." }, { status: 400 });
    if (!message?.trim())
      return NextResponse.json({ message: "Message is required." }, { status: 400 });

    // ── Transporter ─────────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const firstName = name.trim().split(" ")[0];

    // ══════════════════════════════════════════════════════════════════
    // 1. OWNER EMAIL — new enquiry notification
    // ══════════════════════════════════════════════════════════════════
    await transporter.sendMail({
      from: `"SiteDesign Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Enquiry from ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f2f2f2;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:36px 0;">
  <tr><td align="center">
    <table width="580" cellpadding="0" cellspacing="0"
      style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 6px 32px rgba(0,0,0,0.10);">

      <!-- Header gradient -->
      <tr>
        <td style="background:linear-gradient(329deg,#FF91FA,#FA6490,#F7D86A);padding:22px 30px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="color:#fff;font-size:22px;font-weight:900;letter-spacing:-0.5px;">SiteDesign</span>
                <br><span style="color:#fff9;font-size:12px;font-weight:500;">New Enquiry Notification</span>
              </td>
              <td align="right">
                <span style="background:#fff3;color:#fff;font-size:12px;font-weight:700;
                  padding:4px 12px;border-radius:20px;border:1px solid #fff5;">
                  📬 NEW LEAD
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Alert banner -->
      <tr>
        <td style="background:#fff8f0;padding:14px 30px;border-bottom:1px solid #ffe0b2;">
          <p style="margin:0;font-size:14px;color:#e65100;font-weight:600;">
            🔔 You have a new contact form submission. Please respond within 24 hours.
          </p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:28px 30px;">
          <h2 style="margin:0 0 20px;font-size:18px;color:#1a1a1a;font-weight:800;">
            Customer Details
          </h2>

          <!-- Detail cards -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:0 0 12px;">
                <div style="background:#fafafa;border:1px solid #eee;border-left:4px solid #FA6490;
                  border-radius:8px;padding:12px 16px;">
                  <p style="margin:0 0 2px;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:0.6px;">Full Name</p>
                  <p style="margin:0;font-size:16px;font-weight:700;color:#111;">${name}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 0 12px;">
                <div style="background:#fafafa;border:1px solid #eee;border-left:4px solid #FF91FA;
                  border-radius:8px;padding:12px 16px;">
                  <p style="margin:0 0 2px;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:0.6px;">Email Address</p>
                  <p style="margin:0;font-size:15px;font-weight:600;color:#111;">${email}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 0 12px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="48%" style="padding-right:6px;">
                      <div style="background:#fafafa;border:1px solid #eee;border-left:4px solid #F7D86A;
                        border-radius:8px;padding:12px 16px;">
                        <p style="margin:0 0 2px;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:0.6px;">Phone</p>
                        <p style="margin:0;font-size:15px;font-weight:700;color:#111;">${phone}</p>
                      </div>
                    </td>
                    <td width="48%" style="padding-left:6px;">
                      <div style="background:#fafafa;border:1px solid #eee;border-left:4px solid #c084fc;
                        border-radius:8px;padding:12px 16px;">
                        <p style="margin:0 0 2px;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:0.6px;">City</p>
                        <p style="margin:0;font-size:15px;font-weight:600;color:#111;">${city || "—"}</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 0 8px;">
                <div style="background:#fafafa;border:1px solid #eee;border-left:4px solid #34d399;
                  border-radius:8px;padding:14px 16px;">
                  <p style="margin:0 0 6px;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:0.6px;">Message</p>
                  <p style="margin:0;font-size:14px;color:#333;line-height:1.7;">${message}</p>
                </div>
              </td>
            </tr>
          </table>

          <!-- Quick actions -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
            <tr>
              <td align="center" style="padding-right:6px;" width="50%">
                <a href="mailto:${email}"
                  style="display:block;background:linear-gradient(329deg,#FF91FA,#FA6490,#F7D86A);
                    color:#fff;text-decoration:none;font-size:13px;font-weight:700;
                    padding:12px 0;border-radius:8px;text-align:center;">
                  📧 Reply by Email
                </a>
              </td>
              <td align="center" style="padding-left:6px;" width="50%">
                <a href="https://wa.me/91${phone}"
                  style="display:block;background:#25D366;color:#fff;text-decoration:none;
                    font-size:13px;font-weight:700;padding:12px 0;border-radius:8px;text-align:center;">
                  💬 WhatsApp Customer
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f9f9f9;padding:16px 30px;border-top:1px solid #eee;text-align:center;">
          <p style="margin:0;color:#bbb;font-size:11px;">
            SiteDesign · Contact Form Submission · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>
      `,
    });

    // ══════════════════════════════════════════════════════════════════
    // 2. USER EMAIL — beautiful thank you mail
    // ══════════════════════════════════════════════════════════════════
    await transporter.sendMail({
      from: `"SiteDesign" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you, ${firstName}! We've received your enquiry `,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f2f2f2;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:36px 0;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0"
      style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 6px 32px rgba(0,0,0,0.10);">

      <!-- Gradient header -->
      <tr>
        <td style="background:linear-gradient(329deg,#FF91FA,#FA6490,#F7D86A);padding:24px 30px;text-align:center;">
          <span style="color:#fff;font-size:26px;font-weight:900;letter-spacing:-0.5px;">SiteDesign</span>
        </td>
      </tr>

      <!-- Success banner -->
      <tr>
        <td style="padding:36px 30px 24px;text-align:center;background:#fff;">
          <!-- Circle checkmark -->
          <div style="display:inline-block;width:72px;height:72px;border-radius:50%;
            background:linear-gradient(135deg,#FF91FA,#FA6490,#F7D86A);
            line-height:72px;text-align:center;margin-bottom:20px;">
            <span style="color:#fff;font-size:32px;line-height:72px;">✓</span>
          </div>
          <h1 style="margin:0 0 8px;font-size:26px;font-weight:900;color:#1a1a1a;">
            Thank you, ${firstName}! 
          </h1>
          <p style="margin:0;font-size:12px;color:#aaa;font-weight:600;
            text-transform:uppercase;letter-spacing:1.5px;">
            Enquiry Successfully Received
          </p>
        </td>
      </tr>

      <!-- Thin gradient line -->
      <tr>
        <td>
          <div style="height:3px;background:linear-gradient(90deg,#FF91FA,#FA6490,#F7D86A);"></div>
        </td>
      </tr>

      <!-- Body text -->
      <tr>
        <td style="padding:28px 32px;">
          <p style="margin:0 0 14px;font-size:15px;color:#333;line-height:1.7;">
            Hi <strong>${firstName}</strong>, we're excited to connect with you! 
          </p>
          <p style="margin:0 0 20px;font-size:14px;color:#555;line-height:1.8;">
            Your enquiry is in our hands. Our team will review your message and reach out to you
            <strong style="color:#FA6490;">within 24 hours</strong> with the best solution for your needs.
          </p>

          <!-- Summary card -->
          <div style="background:linear-gradient(135deg,#fff5fe,#fff8f0);border:1px solid #fddcf5;
            border-radius:10px;padding:18px 20px;margin-bottom:24px;">
            <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#FA6490;
              text-transform:uppercase;letter-spacing:0.8px;">Your Submission Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:4px 0;font-size:13px;color:#888;width:80px;">Name</td>
                <td style="padding:4px 0;font-size:13px;color:#111;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:4px 0;font-size:13px;color:#888;">Phone</td>
                <td style="padding:4px 0;font-size:13px;color:#111;font-weight:600;">${phone}</td>
              </tr>
              ${city ? `<tr>
                <td style="padding:4px 0;font-size:13px;color:#888;">City</td>
                <td style="padding:4px 0;font-size:13px;color:#111;font-weight:600;">${city}</td>
              </tr>` : ""}
            </table>
          </div>

          <p style="margin:0 0 6px;font-size:14px;color:#555;line-height:1.7;">
            Need a faster response? We're available on WhatsApp — just tap below!
          </p>
        </td>
      </tr>

      <!-- WhatsApp CTA -->
      <tr>
        <td style="padding:0 32px 28px;text-align:center;">
          <a href="https://wa.me/917845002502"
            style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;
              font-size:15px;font-weight:800;padding:15px 36px;border-radius:50px;
              letter-spacing:0.3px;box-shadow:0 4px 16px rgba(37,211,102,0.35);">
             Chat on WhatsApp · 7845002502
          </a>
        </td>
      </tr>

      <!-- Gradient divider -->
      <tr>
        <td style="padding:0 32px 20px;text-align:center;">
          <div style="height:2px;width:80px;margin:0 auto;border-radius:2px;
            background:linear-gradient(90deg,#FF91FA,#FA6490,#F7D86A);"></div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#fafafa;padding:18px 30px;border-top:1px solid #f0f0f0;text-align:center;">
          <p style="margin:0 0 4px;color:#bbb;font-size:11px;">
            You received this because you submitted a contact form at SiteDesign.
          </p>
          <p style="margin:0;color:#ddd;font-size:11px;">
            © ${new Date().getFullYear()} SiteDesign. All rights reserved.
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Server Error:", error);
    return NextResponse.json({ message: error.message || "Something went wrong." }, { status: 500 });
  }
}