import React, { useContext } from "react";
import "../styles/Footer.css"
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Footer = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const clickHandler = () => {
    if(isAuthenticated){
      navigate("/services");
    window.scrollTo({ top: 0, behavior: 'smooth' });

    }else {
      navigate("/signup");
    window.scrollTo({ top: 0, behavior: 'smooth' });


    }
  }

  return (
    <div>
      <header className="cta-section">
        <h1>Ready to Upgrade Your Job Search Experience?</h1>
        <button className="cta-button" onClick={clickHandler}>Get Started</button>
        <div>
        <div style={{border: "2px solid gray" ,width: "30px" , margin:"5px auto", alignItems :"center",display:"inline-block"}}></div>
        </div>
      
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
            <li><NavLink to="/"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</NavLink></li>
            <li><NavLink to="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</NavLink></li>
          </ul>
        </div>
        {/* <div className="footer-section contact">
          <h2>Contact Us</h2>
          <address>
            5400 W parmar LN APT427,<br />
            Austin, Texas, US<br />
            <NavLink to="mailto:sandymr551@gmail.com">sandymr551@gmail.com</NavLink><br />
          </address>
        </div> */}
      </footer>
    </div>

  )
}

export default Footer;