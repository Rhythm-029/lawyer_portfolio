import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, message, website_hp } = req.body || {};

    // 1. Bot Honeypot Protection
    if (website_hp && website_hp.trim() !== '') {
      return res.status(200).json({ success: true });
    }

    // 2. Input Validation
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

    const RECIPIENT_EMAIL = 'abe@espejo-partners.online';
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const emailResult = await resend.emails.send({
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
            <p style="font-size: 11px; color: #94A3B8; text-transform: uppercase;">Submitted via espejo-partners.online</p>
          </div>
        `,
      });

      if (emailResult.error) {
        console.error('Resend API Error:', emailResult.error);
        return res.status(500).json({
          success: false,
          message: 'Unable to send your inquiry. Please try again.',
        });
      }
    } else {
      console.warn('RESEND_API_KEY is not configured on Vercel.');
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you. Your inquiry has been sent successfully.',
    });
  } catch (error) {
    console.error('Serverless Contact Handler Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
}
