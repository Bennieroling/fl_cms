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
    const { ['nombre-contacto']: fullName, telefono: phone, ['nombre-empresa']: companyName, ['contact-email']: email, mensaje: message } = req.body;

    if (!fullName || !phone || !companyName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const notificationTemplate = fs.readFileSync(path.join(process.cwd(), 'templates', 'notification_email.html'), 'utf-8');
    const confirmationTemplate = fs.readFileSync(path.join(process.cwd(), 'templates', 'confirmation_email.html'), 'utf-8');

    const populatedNotification = notificationTemplate
      .replace('${fullName}', fullName)
      .replace('${phone}', phone)
      .replace('${companyName}', companyName)
      .replace('${email}', email)
      .replace('${message}', message);

    const populatedConfirmation = confirmationTemplate
      .replace('${fullName}', fullName)
      .replace('${phone}', phone)
      .replace('${companyName}', companyName)
      .replace('${email}', email)
      .replace('${message}', message);

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