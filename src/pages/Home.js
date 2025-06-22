import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
//import { useNavigate } from "react-router-dom";      razorpay
import { useState } from "react";
import { sendToGemini } from "../geminiApi";
export default function MyHomePage() {
 // const navigate = useNavigate();                               razorpay
  const [showChat, setShowChat] = useState(false);


  const toggleChat = () => setShowChat(!showChat);

  //gemini 
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

  //Razorpay

/*                                                                                          razorpay
  const handleRazorpay = async () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // replace with your Razorpay key
      amount: 50000, // amount in paise = ₹500
      currency: "INR",
      name: "DayFit Premium",
      description: "Premium Purchase",
      image: "https://yourlogo.com/logo.png",                                               razorpay
      handler: function (response) {
        alert("Payment ID: " + response.razorpay_payment_id);
        navigate("/home");
      },
      prefill: {
        name: "Prodipta",
        email: "email@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#1e3a8a"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };*/
  return (
    <div className="myhome-container">
      

      {/* Logo and Stats Section */}
      <section className="stats-section">
        <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt="App Logo" className="main-logo" />
        <div className="stats-boxes">
          <div className="box calorie-box">
            <h3>Calories</h3>
            <p>Remaining = Goal - Food + Exercise</p>
            <div className="progress-ring">
              <svg width="100" height="100">
                <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                <circle cx="50" cy="50" r="45" stroke="#1d4ed8" strokeWidth="10" fill="none" strokeDasharray="283" strokeDashoffset="90" />
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="14" fill="#1e293b">1520 kcal</text>
              </svg>

            </div>
          </div>

          <div className="box distance-box">
            <h3>Distance</h3>
            <p>Distance Travelled: 4.6 km</p>
            <p>Calories Burned: 320 kcal</p>
          </div>
        </div>
      </section>

      {/* Premium Summary Section */}
      <section className="premium-section">
        <div className="premium-box blurred">
          <h3>Heart Health</h3>
          <p>Premium Content</p>
        </div>
        <div className="premium-box blurred">
          <h3>Low Carb</h3>
          <p>Premium Content</p>
        </div>
        <div className="premium-box blurred">
          <h3>Custom Summary</h3>
          <p>Premium Content</p>
        </div>
        <Link to="/payment">
          <button >
            Premium                                  {/*razorpay*/}
          </button>
        </Link>
      </section>

      {/* Article Section */}
      <section className="article-section">
        <div className="article-box">
          <h2>What You Need to Know About the Health Risks (and Benefits) of Grilled Meat</h2>
          <p>Love grilled meat but worry about health risks? Here's what science says about grilling and cancer—and how to make your BBQs healthier.</p>

          <h2>How to Know When Your Meat is Actually Cooked Without Overcooking It</h2>
          <p>Learn how to tell when your meat is cooked without overcooking. Get expert tips on the right temps for different meats.</p>

          <h2>How To Store Prepped Protein So It Stays Juicy All Week</h2>
          <p>How long does meal prep last? Learn the best ways to prep, store, and reheat proteins to make healthy eating easier and more flavorful.</p>
        </div>
      </section>
      {/* Floating AI Assistant Icon */}
      <button className="ai-chat-toggle" onClick={toggleChat}>
        🤖
      </button>

      {/* AI Chat Box */}
      {showChat && (


        <div className="ai-chat-box">
          <div className="chat-header">AI Assistant</div>
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
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />

            <button class="send" onClick={handleSend}>Send</button>
          </div>
        </div>


      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/">Calorie Counter</a>
          <a href="/">Terms</a>
          <a href="/Privacy">Privacy</a>
          <a href="/">Contact Us</a>
          <a href="/">Feedback</a>
          <a href="/Community">Community Guidelines</a>
        </div>
        <div className="copyright">
          © 2025 Dayfit Inc.
        </div>
      </footer>
    </div>
  );
}
