import React from "react";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div>
      <header className="cta-section">
        <h1>Ready to Upgrade Your Job Search Experience?</h1>
        <button className="cta-button">Get Started</button>
        <p className="cta-call">or call us at:</p>
        <p className="cta-phone">09876543267</p>
      </header>
      <footer className="footer">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Vijay Rath is dedicated to empowering students in their job search journey. Join us and take the next step in your career.</p>
        </div>
        <div className="footer-section links">
          <h2>Useful Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <address>
            5400 W parmar LN APT427,<br />
            Austin, Texas, US<br />
            <a href="mailto:sandymr551@gmail.com">sandymr551@gmail.com</a><br />
            09876543267
          </address>
        </div>
      </footer>
    </div>

  )
}

export default Footer;