import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, company, budget, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email, and Message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email TO YOU (Admin Notification)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Lead: ${name} (${company || "Personal"})`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: #111; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h2 style="color: #fff; margin: 0;">New Project Inquiry</h2>
          </div>
          <div style="background-color: #f4f4f5; padding: 20px; border: 1px solid #e4e4e7;">
            <p style="margin-bottom: 5px; font-weight: bold; color: #555;">CLIENT DETAILS:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p><strong>Company:</strong> ${company || "Not specified"}</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
            
            <hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0;">
            
            <p style="margin-bottom: 5px; font-weight: bold; color: #555;">MESSAGE:</p>
            <p style="background: #fff; padding: 15px; border-radius: 5px; line-height: 1.5;">${message}</p>
          </div>
        </div>
      `,
    };

    // 2. Email TO SENDER (Auto-Reply)
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "I've received your message! — Mahenoor Salat",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
            <p style="color: #e0f2fe; margin-top: 10px; font-size: 16px;">I build scalable AI & Web Solutions.</p>
          </div>

          <div style="padding: 30px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Thanks for contacting me! I have received your message regarding your project${company ? ` at <strong>${company}</strong>` : ""}.
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              I typically reply within <strong>24 hours</strong>. While you wait, feel free to review my recent work or connect with me on other platforms.
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://thefullstack-dev.vercel.app/work" style="background-color: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 16px;">
                View My Portfolio
              </a>
            </div>

            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; font-size: 14px; color: #6b7280; border: 1px solid #f3f4f6;">
              <p style="margin: 0 0 10px 0; font-weight: bold; color: #374151;">You wrote:</p>
              <p style="margin: 0; font-style: italic;">"${message}"</p>
            </div>
          </div>

          <div style="background-color: #1f2937; padding: 20px; text-align: center; color: #9ca3af; font-size: 14px;">
            <h4 style="margin: 0 0 10px 0; color: #ffffff;">Mahenoor Salat</h4>
            <p style="margin: 0 0 15px 0;">Top Rated Full Stack Developer & AI Engineer</p>
            
            <div style="margin-bottom: 15px;">
              <a href="https://www.linkedin.com/in/salat-mahenoor/" style="color: #60a5fa; text-decoration: none; margin: 0 10px;">LinkedIn</a> |
              <a href="https://github.com/mahenoorsalat" style="color: #60a5fa; text-decoration: none; margin: 0 10px;">GitHub</a> |
              <a href="https://www.upwork.com/freelancers/~017b36696fdb312255" style="color: #22c55e; text-decoration: none; margin: 0 10px;">Upwork</a>
            </div>
            
            <p style="margin: 0; font-size: 12px;">&copy; ${new Date().getFullYear()} Mahenoor Salat. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}