require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3000'] }));
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Validate transporter on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ Email transporter error:', error.message);
    console.error('   Check EMAIL_USER and EMAIL_PASS in server/.env');
  } else {
    console.log('✅ Email server ready — listening for contact submissions');
  }
});

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, projectType, stops, budget, message } = req.body;

  // Server-side validation
  if (!firstName || !lastName || !email || !phone || !projectType) {
    return res.status(400).json({ success: false, message: 'Required fields missing.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone.replace(/[\s\-\+]/g, ''))) {
    return res.status(400).json({ success: false, message: 'Invalid Indian phone number.' });
  }

  const mailOptions = {
    from: `"North Star Lifts — Website Enquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `New Enquiry: ${projectType} — ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0f172a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #f25c05; margin: 0;">New Project Enquiry</h2>
          <p style="color: #94a3b8; margin: 4px 0 0;">North Star Lifts & Escalators — Website Contact Form</p>
        </div>
        <div style="background: #f8fafc; padding: 28px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; width: 40%; font-weight: 600;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: 600;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}" style="color: #f25c05;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: 600;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="tel:${phone}" style="color: #f25c05;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: 600;">Project Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: 600;">Number of Stops</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${stops || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: 600;">Budget Range</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${budget || 'Not specified'}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px 0; color: #475569; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0f172a;">${message}</td>
            </tr>` : ''}
          </table>
          <p style="margin: 24px 0 0; color: #94a3b8; font-size: 0.85rem;">
            This enquiry was submitted via the North Star Lifts website on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Enquiry sent: ${firstName} ${lastName} <${email}>`);
    res.json({ success: true, message: 'Your enquiry has been sent successfully! We will get back to you within 24 hours.' });
  } catch (error) {
    console.error('❌ Send error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to send email. Please try again or call us directly.' });
  }
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`🚀 Contact server running at http://localhost:${PORT}`);
});
