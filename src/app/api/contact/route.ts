import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, description } = body;

    // Validate required fields
    if (!name || !email || !projectType || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Configure transport — uses environment variables
    // Set these in .env.local:
    //   SMTP_HOST=smtp.gmail.com
    //   SMTP_PORT=587
    //   SMTP_USER=your@gmail.com
    //   SMTP_PASS=your-app-password
    //   CONTACT_EMAIL=hello@pygentik.com
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0C; color: #F0EBE0; padding: 40px; border-radius: 12px;">
        <div style="border-bottom: 2px solid #E8A838; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="color: #E8A838; margin: 0; font-size: 24px;">New Project Inquiry</h1>
          <p style="color: #9A9A9E; margin: 5px 0 0 0; font-size: 14px;">via pygentik.com contact form</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; color: #9A9A9E; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 12px 0; color: #F0EBE0; font-size: 15px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #9A9A9E; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; color: #F0EBE0; font-size: 15px;"><a href="mailto:${email}" style="color: #E8A838; text-decoration: none;">${email}</a></td>
          </tr>
          ${
            company
              ? `<tr>
            <td style="padding: 12px 0; color: #9A9A9E; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Company</td>
            <td style="padding: 12px 0; color: #F0EBE0; font-size: 15px;">${company}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding: 12px 0; color: #9A9A9E; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Project Type</td>
            <td style="padding: 12px 0; color: #F0EBE0; font-size: 15px;">${projectType}</td>
          </tr>
          ${
            budget
              ? `<tr>
            <td style="padding: 12px 0; color: #9A9A9E; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Budget</td>
            <td style="padding: 12px 0; color: #F0EBE0; font-size: 15px;">${budget}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding: 12px 0; color: #9A9A9E; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Description</td>
            <td style="padding: 12px 0; color: #F0EBE0; font-size: 15px; line-height: 1.6;">${description.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #F0EBE0/10; text-align: center;">
          <p style="color: #5A5A5E; font-size: 12px; margin: 0;">Sent from pygentik.com contact form</p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Pygentik Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "hello@pygentik.com",
      replyTo: email,
      subject: `New Project Inquiry: ${projectType} — ${name}`,
      html: htmlContent,
      text: `New Project Inquiry\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nProject Type: ${projectType}\nBudget: ${budget || "N/A"}\n\nDescription:\n${description}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
