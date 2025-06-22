import React from "react";
import { Link } from "react-router-dom";
import "../style/premimium.css";

export default function PremiumPage() {
  return (
    <div className="premium-page">
     

      <section className="promo-section">
        <p className="promo-text">Plan 30 days of delicious meals for <Link to="/trial"><b>Start Free Trial</b></Link></p>

        <div className="carousel">
          <div className="carousel-left">
            <p className="new-label">New in App?</p>
            <h2>Hello Meal Planner</h2>
            <p className="subhead">All the tools you need to plan and prep tasty, goal-friendly meals, week after week.</p>
            <button className="trial-btn">Start Free Trial</button>
          </div>
          <div className="carousel-right">
            <img src="https://help.apple.com/assets/67EAFA00341984D9AE00EC98/67EAFA0586243791BA0154F5/en_US/e18f7ced108ea5db7034d3314925df2c.png" alt="iPhone" />
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>What You Get</h2>
        <p className="description">No more stressing about what to eat to hit your goals</p>
        <div className="benefit-cards">
          <div className="benefit-card">Smart Recipes</div>
          <div className="benefit-card">Weekly Grocery Lists</div>
          <div className="benefit-card">AI-Powered Suggestions</div>
        </div>
      </section>

      <section className="bonus-section">
        <p>... plus, enjoy all the habit-building benefits of Dayfit</p>
        <p>With <strong>Premium+</strong> you also get ad-free logging, barcode scan, custom macro tracking, and everything else our app has to offer.</p>
      </section>

      <section className="pricing-section">
        <h2>Premium</h2>
        <h3>Better for you and your budget</h3>
        <p className="pricing-description">Ditch the takeout and reduce food waste. Win-win!</p>

        <div className="pricing-plans">
          <div className="plan-box">
            <h4>Monthly Plan</h4>
            <p>₹499/month</p>
            <button className="buy-btn"><Link to="/payment">Buy Now</Link></button>
          </div>
          <div className="plan-box">
            <h4>Yearly Plan</h4>
            <p>₹4999/year</p>
            <button className="buy-btn"><Link to="/payment">Buy Now</Link></button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p className="copyright">© 2025 Dayfit Inc.</p>
      </footer>
    </div>
  );
}
