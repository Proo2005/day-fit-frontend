import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/suppliment.css";
import supimg from '../assets/suppliments/suppliment.webp';
const dummySupplements = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Supplement ${i + 1}`,
  price: 499 + (i % 5) * 100,
  image: supimg,
}));

export default function SupplimentPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    if (!cart.find((c) => c.id === item.id)) {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRazorpay = async () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // replace with your Razorpay key
      amount: 50000, // amount in paise = ₹500
      currency: "INR",
      name: "DayFit Premium",
      description: "Premium Purchase",
      image: "https://yourlogo.com/logo.png",
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
  };

  return (
    <div className="suppliment-page">
      

      <main className="main-section">
        <h2 className="section-title">Select Your Supplement</h2>
        <div className="supplement-grid">
          {dummySupplements.map((item) => (
            <div key={item.id} className="supplement-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div className="card-buttons">
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <button  onClick={handleRazorpay}>Pay Now </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <p className="copyright">© 2025 Dayfit Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}