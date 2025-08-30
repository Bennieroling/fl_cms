export async function sendToBot(message: string | null = null): Promise<string> {
  try {
    const res = await fetch(import.meta.env.VITE_CHAT_URL, {
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

export async function checkChatAvailability(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout
    
    const response = await fetch(import.meta.env.VITE_CHAT_URL, {
      method: "HEAD",
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    return false;
  }
}