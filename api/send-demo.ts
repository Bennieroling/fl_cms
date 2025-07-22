import fs from 'fs';
import path from 'path';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { fullName, phone, companyName, email, message } = req.body;

    console.log('📩 Incoming form data:', {
      fullName,
      phone,
      companyName,
      email,
      message
    });

    if (!fullName || !phone || !companyName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const notificationTemplate = fs.readFileSync(path.join(process.cwd(), 'templates', 'notification_email.html'), 'utf-8');
    const confirmationTemplate = fs.readFileSync(path.join(process.cwd(), 'templates', 'confirmation_email.html'), 'utf-8');

    const populatedNotification = notificationTemplate
      .replace(/{{nombre-contacto}}/g, fullName)
      .replace(/{{telefono}}/g, phone)
      .replace(/{{nombre-empresa}}/g, companyName)
      .replace(/{{contact-email}}/g, email)
      .replace(/{{mensaje}}/g, message);

    const populatedConfirmation = confirmationTemplate
      .replace(/{{nombre-contacto}}/g, fullName)
      .replace(/{{telefono}}/g, phone)
      .replace(/{{nombre-empresa}}/g, companyName)
      .replace(/{{contact-email}}/g, email)
      .replace(/{{mensaje}}/g, message);

    await resend.emails.send({
      from: 'CWS Centro Médico <no-reply@festinalente.dev>',
      to: 'festinalentedev2021@gmail.com',
      subject: `Nueva solicitud de demostración`,
      html: populatedNotification
    });

    await resend.emails.send({
      from: 'CWS Centro Médico <no-reply@festinalente.dev>',
      to: email,
      subject: 'Gracias por tu solicitud',
      html: populatedConfirmation
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}