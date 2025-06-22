import React from "react";
import "../style/Privacy.css";

export default function Privacy() {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>Effective Date: June 20, 2025</p>
      </header>

      <section className="privacy-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to DayFit. We are committed to protecting your personal
          information and your right to privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when
          you use our app and services.
        </p>
      </section>

      <section className="privacy-section">
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal Information (name, email, contact number)</li>
          <li>Health Data (calories, workouts, distance traveled)</li>
          <li>Usage Data (pages visited, features used)</li>
          <li>Device Information (browser, device type, OS)</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>3. How We Use Your Information</h2>
        <p>Your information helps us:</p>
        <ul>
          <li>Personalize your experience</li>
          <li>Track fitness progress and goals</li>
          <li>Improve our services and features</li>
          <li>Send important updates or promotions</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information. We may share it
          with:
        </p>
        <ul>
          <li>Service providers who support our platform</li>
          <li>Authorities when required by law</li>
          <li>Analytics providers to improve our app</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>5. Data Retention</h2>
        <p>
          We retain your data only as long as necessary for legitimate business
          purposes and to comply with legal obligations.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Your Privacy Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your data</li>
          <li>Withdraw consent at any time</li>
          <li>Contact us for any privacy concern</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>7. Security</h2>
        <p>
          We implement strong security measures to protect your data. However,
          no digital system is 100% secure. Please keep your login credentials
          confidential.
        </p>
      </section>

      <section className="privacy-section">
        <h2>8. Updates to this Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be
          reflected on this page with a revised effective date.
        </p>
      </section>

      <section className="privacy-section">
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us at:
          <br />
          📧 support@dayfit.com
        </p>
      </section>

      <footer className="privacy-footer">
        <p>© 2025 DayFit Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
