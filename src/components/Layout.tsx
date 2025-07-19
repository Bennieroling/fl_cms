import React from "react";
import { sendToBot } from "@/lib/chatbot";
import Footer from "@/components/Footer";
import MenubarMain from "@/components/ui/menubar";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Go to homepage">
            <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">CWS Centro Médico Laboral</h1>
          </Link>
          <MenubarMain />
        </div>
      </header>

      <main className="flex-grow bg-background py-20 px-4">
        {children}
      </main>

  <Footer />

      {/* Chat Widget Button */}
      <div
        id="chat-widget"
        onClick={() => {
          const chatBox = document.getElementById("chat-box");
          if (chatBox) chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#047857",
          color: "#fff",
          padding: "12px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        💬 Chat
      </div>

      {/* Chat Box */}
      <div
        id="chat-box"
        style={{
          display: "none",
          position: "fixed",
          bottom: "70px",
          right: "20px",
          width: "300px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "10px",
          zIndex: 9999,
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{
          backgroundColor: "#047857",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <span>Assistant</span>
          <span
            style={{ cursor: "pointer", fontSize: "16px", opacity: 0.7 }}
            onClick={() => {
              const chatBox = document.getElementById("chat-box");
              if (chatBox) chatBox.style.display = "none";
            }}
          >
            &ndash;
          </span>
        </div>
        <div id="chat-messages" style={{ height: "200px", overflowY: "auto", padding: "10px", fontSize: "14px" }}></div>
        <input
          type="text"
          id="chat-input"
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const input = document.getElementById("chat-input") as HTMLInputElement;
              const msg = input?.value.trim();
              if (!msg) return;

              const messages = document.getElementById("chat-messages");
              const userMsg = document.createElement("div");
              userMsg.textContent = "You: " + msg;
              messages?.appendChild(userMsg);
              input.value = "";

              const loadingMsg = document.createElement("div");
              loadingMsg.textContent = "Bot está escribiendo...";
              loadingMsg.style.fontStyle = "italic";
              loadingMsg.id = "loading-msg";
              messages?.appendChild(loadingMsg);

              sendToBot(msg).then((reply) => {
                document.getElementById("loading-msg")?.remove();
                const botMsg = document.createElement("div");
                botMsg.textContent = "Bot: " + reply;
                messages?.appendChild(botMsg);
                messages.scrollTop = messages.scrollHeight;
              }).catch(() => {
                document.getElementById("loading-msg")?.remove();
                const errorMsg = document.createElement("div");
                errorMsg.textContent = "Bot: Ocurrió un error. Intenta más tarde.";
                messages?.appendChild(errorMsg);
              });
            }
          }}
          style={{
            width: "100%",
            border: "none",
            padding: "10px",
            borderTop: "1px solid #ccc",
            boxSizing: "border-box",
            fontSize: "14px",
          }}
        />
      </div>
    </div>
  );
};

export default Layout;