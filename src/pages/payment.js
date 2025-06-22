import React, { useState } from "react";
import "../style/payment.css";
import { useNavigate } from "react-router-dom";


export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleRazorpay = async () => {
    const options = {
      key: "rzp_test_wRak5731kH55Io", // replace with your Razorpay key
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock payment API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // simulating API call delay

      // success
      alert("Payment successful!");
      navigate("/home");
    } catch (err) {
      alert("Payment failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Navbar */}
      
      <div className="payment-page">
        {loading && <div className="loader"></div>}
        <h2>Complete Your Purchase</h2>

        <form className="payment-form" onSubmit={handleSubmit}>
          <label>Select Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="card">Credit/Debit Card</option>
            <option value="gpay">Google Pay</option>
            <option value="upi">UPI</option>
          </select>

          {paymentMethod === "card" && (
            <div className="card-fields">
              <input type="text" placeholder="Cardholder Name" required />
              <input type="text" placeholder="Card Number" required maxLength="16" />
              <input type="text" placeholder="Expiry (MM/YY)" required />
              <input type="text" placeholder="CVV" required maxLength="3" />
            </div>
          )}

          {paymentMethod === "gpay" && (
            <div className="gpay-info">
              <p>Scan the QR or proceed with Google Pay on your phone.</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png"
                alt="Google Pay"
              />
            </div>
          )}

          {paymentMethod === "upi" && (
            <div className="upi-field">
              <input type="text" placeholder="Enter your UPI ID" required />
            </div>
          )}
          <button type="button" className="pay-btn" disabled={loading} onClick={handleRazorpay}>
            {loading ? "Processing..." : "Pay Now"}
          </button>

        </form>
      </div>
    </>
  );
}
