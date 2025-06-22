// src/components/Layout.js
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../ui/layout.css"; // You can keep common styles here

export default function Layout() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">DAYFIT</h1>
        <div className="nav-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
          </a>
          <Link to="/login" className="profile-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" />
          </Link>
        </div>
      </header>

      {/* Horizontal Nav */}
      <nav className="horizontal-nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/ai" className="nav-link">Ai</Link></li>
          <li className="nav-item"><Link to="/exercise" className="nav-link">Exercise</Link></li>
          <li className="nav-item"><Link to="/suppliment" className="nav-link">Suppliment</Link></li>
          <li className="nav-item"><Link to="/app" className="nav-link">App</Link></li>
          <li className="nav-item"><Link to="/community" className="nav-link">Community</Link></li>

          <li className="nav-item"><Link to="/premimium" className="nav-link">Premium</Link></li>
        </ul>
      </nav>

      {/* Page Content */}
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}
