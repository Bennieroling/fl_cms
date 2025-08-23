// api/send-demo.ts
import fs from 'fs';
import path from 'path';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Cache templates at module scope (loaded once per cold start)
let notificationTpl: string | null = null;
let confirmationTpl: string | null = null;

// Fallback templates if files don't exist
const fallbackNotification = `
<html>
<body>
<h2>Nueva solicitud de demostración</h2>
<p><strong>Contacto:</strong> {{nombre-contacto}}</p>
<p><strong>Email:</strong> {{contact-email}}</p>
<p><strong>Teléfono:</strong> {{telefono}}</p>
<p><strong>Empresa:</strong> {{nombre-empresa}}</p>
<p><strong>Mensaje:</strong></p>
<p>{{mensaje}}</p>
</body>
</html>
`;

const fallbackConfirmation = `
<html>
<body>
<h2>Gracias por tu consulta, {{nombre-contacto}}</h2>
<p>Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.</p>
<p><strong>Datos recibidos:</strong></p>
<p>Empresa: {{nombre-empresa}}</p>
<p>Teléfono: {{telefono}}</p>
<p>Email: {{contact-email}}</p>
<p>Mensaje: {{mensaje}}</p>
<p>Saludos,<br>CMS Laboral</p>
</body>
</html>
`;

function getTemplate(name: string) {
  try {
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
  } catch (error) {
    console.warn(`⚠️ Template loading failed, using fallback for ${name}:`, error);
    return name === 'notification' ? fallbackNotification : fallbackConfirmation;
  }
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
    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY environment variable is not set');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const raw = req.body || {};
    const fullName = String(raw.fullName ?? '').trim();
    const phone = String(raw.phone ?? '').trim();
    const companyName = String(raw.companyName ?? '').trim();
    const email = String(raw.email ?? '').trim();
    const message = String(raw.message ?? '').trim();

    console.log('📧 Processing email request:', { fullName, email, companyName });

    if (!fullName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (typeof raw.website === 'string' && raw.website.trim() !== '') {
      return res.status(200).json({ success: true });
    }

    console.log('📄 Loading email templates...');
    const notificationTemplate = getTemplate('notification');
    const confirmationTemplate = getTemplate('confirmation');
    console.log('✅ Templates loaded successfully');

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

    console.log('📨 Sending emails...');
    // Send in parallel; note replyTo + response shape
    const [internalRes, userRes] = await Promise.all([
      resend.emails.send({
        from: 'CMS Laboral <hello@cms.com.ar>', // Use verified domain
        to: 'hello@festinalente.dev',
        replyTo: email, // ✅ camelCase
        subject: 'Nueva solicitud de demostración',
        html: populatedNotification,
      }),
      resend.emails.send({
        from: 'CMS Laboral <hello@cms.com.ar>', // Use verified domain
        to: email,
        subject: 'Gracias por tu solicitud',
        html: populatedConfirmation,
      }),
    ]);

    // Narrow errors and collect IDs safely
    if (internalRes.error) {
      console.error('❌ Internal email error:', internalRes.error);
      throw internalRes.error;
    }
    if (userRes.error) {
      console.error('❌ User email error:', userRes.error);
      throw userRes.error;
    }

    const ids = [internalRes.data?.id, userRes.data?.id].filter(Boolean);
    console.log('✅ Emails sent successfully. IDs:', ids);

    return res.status(200).json({ success: true, ids });
  } catch (err) {
    console.error('❌ Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}