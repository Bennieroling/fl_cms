export async function sendToBot(message: string | null = null): Promise<string> {
  try {
    const res = await fetch("https://ops.festinalente.dev/webhook/demo-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    return data.reply || "No hay respuesta.";
  } catch (err) {
    console.error("Bot error:", err);
    return "Ocurrió un error. Intenta más tarde.";
  }
}

export async function initBot(): Promise<string> {
  return await sendToBot("¡Hola! ¿En qué puedo ayudarte hoy?");
}