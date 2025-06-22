// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/login.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import api from '../api/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('login/', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      // Navigate after successful login
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google clicked');
    // Add Google OAuth logic here
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
    // Add Facebook OAuth logic here
  };

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Dayfit</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/Home">Home</Link></li>
        </ul>
      </nav>

      <div className="login-container">
        <div className="login-card">
          <h2>Login to StayFinder</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>

          <div className="or-separator"><span>or</span></div>

          <button className="google-btn" onClick={handleGoogleLogin}>
            <FcGoogle style={{ marginRight: '8px', fontSize: '1.2rem' }} />
            Login with Google
          </button>
          <button className="facebook-btn" onClick={handleFacebookLogin}>
            <FaFacebook style={{ marginRight: '8px', fontSize: '1.2rem' }} />
            Login with Facebook
          </button>

          <p>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}
