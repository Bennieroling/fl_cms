import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { companyName, email, employees } = req.body;
  console.log("📩 Incoming form data:", { companyName, email, employees });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).send("Missing RESEND_API_KEY");
  }

  const isLocal = !process.env.VERCEL_ENV;

  if (isLocal) {
    console.log("🧪 Skipping Resend in local dev mode.");
    console.log("📩 Would have sent:", { companyName, email, employees });
    return res.status(200).send("Mocked success (local dev)");
  }

  try {
    const response = await resend.emails.send({
      from: "no-reply@festinalente.dev",
      to: "festinalentedev2021@gmail.com",
      subject: "Nueva solicitud de demostración",
      html: `
        <h2>Solicitud de Demostración</h2>
        <p><strong>Empresa:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Cantidad de Empleados:</strong> ${employees}</p>
      `
    });

    console.log("📨 Resend API Response:", response);

    console.log("📨 Sending confirmation email to user...");
    /*
    await resend.emails.send({
      from: "no-reply@festinalente.dev",
      to: email,
      subject: "Confirmación de solicitud de demostración",
      html: `
        <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              background-color: #f9fafb;
              padding: 20px;
              color: #374151;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: #fff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            }
            .header {
              background-color: #0077B6;
              color: white;
              padding: 24px 32px;
              text-align: center;
            }
            .content {
              padding: 32px;
            }
            .message {
              margin-bottom: 24px;
              font-size: 16px;
            }
            .footer {
              padding: 20px 32px;
              background: #f1f5f9;
              font-size: 14px;
              color: #6b7280;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Gracias por tu solicitud</h1>
            </div>
            <div class="content">
              <p>Hola ${companyName},</p>
              <p class="message">
                Hemos recibido tu solicitud para una demostración de nuestros servicios médicos laborales. Nuestro equipo se pondrá en contacto contigo a la brevedad.
              </p>
              <p>Gracias por confiar en CWS Centro Médico.</p>
            </div>
            <div class="footer">
              Este es un mensaje automático de confirmación enviado por CWS Centro Médico.
            </div>
          </div>
        </body>
        </html>
      `
    });
    */

    return res.status(200).send("OK");
  } catch (error) {
    console.error("❌ Resend email failed:", error);
    return res.status(500).send("Unexpected error: " + (error as Error).message);
  }
}