import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { companyName, email, employees } = req.body;

    if (!companyName || !email || !employees) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await resend.emails.send({
      from: 'CWS Centro Médico <no-reply@festinalente.dev>',
      to: 'festinalentedev2021@gmail.com',
      subject: `Nueva solicitud de demostración`,
      html: `<p><strong>Empresa:</strong> ${companyName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Empleados:</strong> ${employees}</p>`
    });

    await resend.emails.send({
      from: 'CWS Centro Médico <no-reply@festinalente.dev>',
      to: email,
      subject: 'Gracias por tu solicitud',
      html: `<p>Hola ${companyName},</p>
             <p>Hemos recibido tu solicitud de demostración y te contactaremos a la brevedad.</p>
             <p>Gracias por confiar en CWS Centro Médico.</p>`
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}