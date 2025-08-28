import React, { useState, useEffect, useRef } from "react";
import { initBot, sendToBot, checkChatAvailability } from "@/lib/chatbot";


const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { from: "bot" | "user" | "system"; text: string; loading?: boolean }[]
  >([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [greeted, setGreeted] = useState(false);
  const [isChatAvailable, setIsChatAvailable] = useState(false);
  const [hasCheckedAvailability, setHasCheckedAvailability] = useState(false);

  // Check chat availability on component mount
  useEffect(() => {
    const checkAvailability = async () => {
      const available = await checkChatAvailability();
      setIsChatAvailable(available);
      setHasCheckedAvailability(true);
    };
    checkAvailability();
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  // Send greeting when opened
  useEffect(() => {
    if (isOpen && !greeted) {
      setMessages([
        {
          from: "bot",
          text: "Bot está escribiendo...",
          loading: true,
        },
      ]);
      setGreeted(true);
      initBot()
        .then((reply: string) => {
          setMessages([
            {
              from: "bot",
              text: "Bot: " + reply,
            },
          ]);
        })
        .catch(() => {
          setMessages([
            {
              from: "bot",
              text: "Bot: Ocurrió un error. Intenta más tarde.",
            },
          ]);
        });
    }
  }, [isOpen, greeted]);

  // Focus input when box opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  const handleSend = async () => {
    const msg = input.trim();
    if (!msg) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: "You: " + msg },
      { from: "bot", text: "Bot está escribiendo...", loading: true },
    ]);
    setInput("");
    try {
      const reply = await sendToBot(msg);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: "bot", text: "Bot: " + reply },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: "bot", text: "Bot: Ocurrió un error. Intenta más tarde." },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleOpen = () => {
    setIsOpen((open) => {
      if (!open) setGreeted(false);
      return !open;
    });
  };

  const handleClose = () => setIsOpen(false);

  // Don't render anything if we haven't checked availability yet or if chat is not available
  if (!hasCheckedAvailability || !isChatAvailable) {
    return null;
  }

  return (
    <>
      {/* Chat Widget Button */}
      <div
        id="chat-widget"
        onClick={handleOpen}
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
      {isOpen && (
        <div
          id="chat-box"
          style={{
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
          <div
            style={{
              backgroundColor: "#047857",
              color: "#fff",
              padding: "10px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Assistant</span>
            <span
              style={{ cursor: "pointer", fontSize: "16px", opacity: 0.7 }}
              onClick={handleClose}
            >
              &ndash;
            </span>
          </div>
          <div
            id="chat-messages"
            style={{
              height: "200px",
              overflowY: "auto",
              padding: "10px",
              fontSize: "14px",
              background: "#fff",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  fontStyle: m.loading ? "italic" : "normal",
                  color: m.from === "user" ? "#047857" : "inherit",
                  marginBottom: "4px",
                  whiteSpace: "pre-line",
                }}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <input
            type="text"
            ref={inputRef}
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              width: "100%",
              border: "none",
              padding: "10px",
              borderTop: "1px solid #ccc",
              boxSizing: "border-box",
              fontSize: "14px",
            }}
            autoFocus
          />
        </div>
      )}
    </>
  );
};

export default ChatWidget;