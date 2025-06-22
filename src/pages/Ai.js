import React, { useState } from 'react';
import '../style/Ai.css';

import { sendToGemini } from "../geminiApi"; // adjust path as needed

export default function AssistantPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const aiText = await sendToGemini(input);
      const aiMsg = { sender: "ai", text: aiText };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error("Error talking to Gemini:", err);
    }
  };

  return (
    <>
      {/* ✅ Navbar */}
      
      <div className="assistant-container">
        <h1> HI, I'M YOUR AI ASSITANT</h1>
        <div className="chat-box">
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}