import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Body limit security
app.use(express.json({ limit: '10kb' }));

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5177',
  'http://localhost:3000',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// In-Memory Rate Limiter (5 requests per 15 minutes per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown_ip';
  const now = Date.now();

  const userRecord = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > userRecord.resetTime) {
    userRecord.count = 0;
    userRecord.resetTime = now + RATE_LIMIT_WINDOW_MS;
  }

  if (userRecord.count >= MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      message: 'Too many inquiries submitted from this IP. Please try again later.',
    });
  }

  userRecord.count += 1;
  rateLimitMap.set(ip, userRecord);
  next();
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'Abraham Espejo Contact API', timestamp: new Date().toISOString() });
});

// Contact form POST endpoint
app.post('/api/contact', rateLimiter, async (req, res) => {
  try {
    const { name, email, message, website_hp } = req.body || {};

    // 1. Bot Honeypot Protection: If hidden honeypot field is filled, silently ignore
    if (website_hp && website_hp.trim() !== '') {
      console.warn(`[Spam Blocked] Honeypot field triggered.`);
      return res.status(200).json({ success: true });
    }

    // 2. Input Validation & Sanitization
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid name (minimum 2 characters).',
      });
    }

    if (!email || typeof email !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email address.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanEmail = email.trim().toLowerCase();
    if (!emailRegex.test(cleanEmail) || cleanEmail.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a message (minimum 5 characters).',
      });
    }

    if (message.trim().length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message is too long (maximum 5000 characters).',
      });
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanMessage = message.trim().slice(0, 5000);

    // Fixed Target Recipient - CANNOT BE OVERRIDDEN BY USER
    const RECIPIENT_EMAIL = 'abe@espejo-partners.online';
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

    console.log(`[Contact Form Received] From: ${cleanName} (${cleanEmail})`);

    // 3. Send Email via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const emailResponse = await resend.emails.send({
        from: `Espejo Portfolio Inquiry <${SENDER_EMAIL}>`,
        to: [RECIPIENT_EMAIL],
        replyTo: cleanEmail,
        subject: `New Website Inquiry — ${cleanName}`,
        text: `NEW WEBSITE INQUIRY\n\nName:\n${cleanName}\n\nEmail:\n${cleanEmail}\n\nMessage:\n${cleanMessage}\n\nSubmitted via:\nespejo-partners.online`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #C5A059; border-radius: 8px; background-color: #0F1D30; color: #FFFFFF;">
            <h2 style="color: #C5A059; border-bottom: 1px solid #C5A059; padding-bottom: 10px; margin-top: 0;">NEW WEBSITE INQUIRY</h2>
            <p><strong style="color: #C5A059;">Name:</strong> ${cleanName}</p>
            <p><strong style="color: #C5A059;">Email:</strong> <a href="mailto:${cleanEmail}" style="color: #FFFFFF;">${cleanEmail}</a></p>
            <p><strong style="color: #C5A059;">Message:</strong></p>
            <div style="background-color: #14223D; padding: 15px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #EFECE4;">${cleanMessage}</div>
            <hr style="border: 0; border-top: 1px solid #C5A059; margin-top: 25px; opacity: 0.3;" />
            <p style="font-size: 11px; color: #94A3B8; text-transform: uppercase; tracking: 1px;">Submitted via espejo-partners.online</p>
          </div>
        `,
      });

      if (emailResponse.error) {
        console.error('Resend API Error:', emailResponse.error);
        return res.status(500).json({
          success: false,
          message: 'Unable to send your inquiry. Please try again or email directly.',
        });
      }
    } else {
      console.warn('RESEND_API_KEY is not configured. Email logged to console in local dev mode.');
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you. Your inquiry has been sent successfully.',
    });
  } catch (error) {
    console.error('Contact endpoint error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
