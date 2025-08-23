// api/send-demo.ts
import fs from 'fs';
import path from 'path';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Cache templates at module scope (loaded once per cold start)
let notificationTpl: string | null = null;
let confirmationTpl: string | null = null;
function getTemplate(name: string) {
  if (name === 'notification') {
    if (!notificationTpl) {
      notificationTpl = fs.readFileSync(path.join(process.cwd(), 'templates', 'notification_email.html'), 'utf-8');
    }
    return notificationTpl;
  }
  if (!confirmationTpl) {
    confirmationTpl = fs.readFileSync(path.join(process.cwd(), 'templates', 'confirmation_email.html'), 'utf-8');
  }
  return confirmationTpl;
}

// Basic HTML escape
function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const raw = req.body || {};
    const fullName = String(raw.fullName ?? '').trim();
    const phone = String(raw.phone ?? '').trim();
    const companyName = String(raw.companyName ?? '').trim();
    const email = String(raw.email ?? '').trim();
    const message = String(raw.message ?? '').trim();

    if (!fullName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (typeof raw.website === 'string' && raw.website.trim() !== '') {
      return res.status(200).json({ success: true });
    }

    const notificationTemplate = getTemplate('notification');
    const confirmationTemplate = getTemplate('confirmation');

    const populatedNotification = notificationTemplate
      .replace(/{{nombre-contacto}}/g, esc(fullName))
      .replace(/{{telefono}}/g, esc(phone || '-'))
      .replace(/{{nombre-empresa}}/g, esc(companyName || '-'))
      .replace(/{{contact-email}}/g, esc(email))
      .replace(/{{mensaje}}/g, esc(message).replace(/\n/g, '<br/>'));

    const populatedConfirmation = confirmationTemplate
      .replace(/{{nombre-contacto}}/g, esc(fullName))
      .replace(/{{telefono}}/g, esc(phone || '-'))
      .replace(/{{nombre-empresa}}/g, esc(companyName || '-'))
      .replace(/{{contact-email}}/g, esc(email))
      .replace(/{{mensaje}}/g, esc(message).replace(/\n/g, '<br/>'));

    // Send in parallel; note replyTo + response shape
    const [internalRes, userRes] = await Promise.all([
      resend.emails.send({
        from: 'CMS Laboral <no-reply@cms.com.ar>',
        to: 'info@festinalente.dev',
        replyTo: email, // ✅ camelCase
        subject: 'Nueva solicitud de demostración',
        html: populatedNotification,
      }),
      resend.emails.send({
        from: 'CMS Laboral <info@cms.com.ar>',
        to: email,
        subject: 'Gracias por tu solicitud',
        html: populatedConfirmation,
      }),
    ]);

    // Narrow errors and collect IDs safely
    if (internalRes.error) throw internalRes.error;
    if (userRes.error) throw userRes.error;

    const ids = [internalRes.data?.id, userRes.data?.id].filter(Boolean);

    return res.status(200).json({ success: true, ids });
  } catch (err) {
    console.error('❌ Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}