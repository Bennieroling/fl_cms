// api/send-demo-simple.ts - Simplified version for debugging
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Step 1: Check environment variable
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'RESEND_API_KEY not configured',
        debug: 'Environment variable missing'
      });
    }

    // Step 2: Parse request body
    const raw = req.body || {};
    const fullName = String(raw.fullName ?? '').trim();
    const phone = String(raw.phone ?? '').trim();
    const companyName = String(raw.companyName ?? '').trim();
    const email = String(raw.email ?? '').trim();
    const message = String(raw.message ?? '').trim();

    // Step 3: Validate required fields
    if (!fullName || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        debug: { fullName: !!fullName, email: !!email, message: !!message }
      });
    }

    // Step 4: Initialize Resend
    const resend = new Resend(apiKey);

    // Step 5: Create simple email content
    const notificationHtml = `
      <html>
        <body>
          <h2>Nueva consulta de CMS Laboral</h2>
          <p><strong>Contacto:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
          <p><strong>Empresa:</strong> ${companyName || 'No proporcionado'}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </body>
      </html>
    `;

    const confirmationHtml = `
      <html>
        <body>
          <h2>Gracias por tu consulta, ${fullName}</h2>
          <p>Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.</p>
          <p><strong>Datos recibidos:</strong></p>
          <ul>
            <li>Empresa: ${companyName || 'No especificado'}</li>
            <li>Teléfono: ${phone || 'No proporcionado'}</li>
            <li>Email: ${email}</li>
          </ul>
          <p>Saludos,<br>Equipo CMS Laboral</p>
        </body>
      </html>
    `;

    // Step 6: Send emails
    const [internalRes, userRes] = await Promise.all([
      resend.emails.send({
        from: 'CMS Laboral <onboarding@resend.dev>',
        to: 'hello@festinalente.dev',
        replyTo: email,
        subject: `Nueva consulta de ${fullName} - ${companyName || 'Sin empresa'}`,
        html: notificationHtml,
      }),
      resend.emails.send({
        from: 'CMS Laboral <onboarding@resend.dev>',
        to: email,
        subject: 'Gracias por tu consulta - CMS Laboral',
        html: confirmationHtml,
      }),
    ]);

    // Step 7: Check for errors
    if (internalRes.error) {
      return res.status(500).json({
        error: 'Failed to send internal email',
        debug: internalRes.error
      });
    }

    if (userRes.error) {
      return res.status(500).json({
        error: 'Failed to send confirmation email',
        debug: userRes.error
      });
    }

    // Step 8: Success
    return res.status(200).json({ 
      success: true, 
      ids: [internalRes.data?.id, userRes.data?.id].filter(Boolean),
      debug: 'Emails sent successfully'
    });

  } catch (error: any) {
    return res.status(500).json({ 
      error: 'Server error',
      debug: error.message || error.toString(),
      stack: error.stack
    });
  }
}