// src/Navbar.js
import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = ({isHomePage}) => {
  return (
    <nav className="navbar" style={{ color: isHomePage ? 'white' : 'black' }}>
      <div className="navbar-logo">vijay rath</div>
      <div>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/templates"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
            >
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/secretPage"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
            >
              secret
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className="navbar-button" style={{ color: isHomePage ? 'white' : 'black' , borderColor: isHomePage ? 'white' : 'black'}}>Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
