

export async function sendDemoRequestEmail(data: {
  companyName: string;
  email: string;
  employees: string;
}) {
  const { companyName, email, employees } = data;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${import.meta.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "no-reply@festinalente.dev",
      to: "hello@festinalente.dev", // <-- Replace this with your real receiving email
      subject: "Nueva solicitud de demostración",
      html: `
        <h2>Solicitud de Demostración</h2>
        <p><strong>Empresa:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Cantidad de Empleados:</strong> ${employees}</p>
      `
    })
  });

  if (!response.ok) {
    throw new Error(`Email send failed: ${response.statusText}`);
  }

  return await response.json();
}