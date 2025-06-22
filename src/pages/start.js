import React from "react";
import "../style/start.css";
import { Link } from "react-router-dom";

export default function DayFitLandingPage() {
  return (
    <div className="dayfit-container">
      <header className="header">
        <h1 className="brand">DAYFIT</h1>
        <Link to="/login" className="profile-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
          />
        </Link>
      </header>

      <main className="main">
        <div className="text-section">
          <p className="tagline">#Number 1 Fitness App</p>
          <h2 className="headline">AI <br></br>Health Coach</h2>
          <p >Make progress with the all-in-one food, exercise, and calorie tracker.</p>
          <Link to="/login">
            <button className="login-btn">Login / Register</button>
          </Link>
        </div>
        <div className="image-section">
          <img
            src="https://help.apple.com/assets/67EAFA00341984D9AE00EC98/67EAFA0586243791BA0154F5/en_US/e18f7ced108ea5db7034d3314925df2c.png"
            alt="Health Tracking"
          />
        </div>
      </main>
    </div>
  );
}
