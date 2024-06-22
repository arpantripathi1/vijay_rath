import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import '../styles/Nav.css';

const Navbar = ({ isHomePage }) => {
  const location = useLocation();
  const pathName = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Here you can check if the user is logged in
    // This is just a placeholder. Replace with actual login check.
    const userLoggedIn = false; // Replace with actual check
    setIsLoggedIn(userLoggedIn);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" style={{ color: isHomePage ? 'white' : 'black' }}>
      <div className="navbar-logo">vijay rath</div>
      <div className={`navbar-links-container ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/templates"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
              onClick={toggleMenu}
            >
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ProtectedPage"
              className="navbar-link"
              style={{ color: isHomePage ? 'white' : 'black' }}
              onClick={toggleMenu}
            >
              Secret
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-actions">
        {!isLoggedIn && (
          pathName === "/signup" ? (
            <NavLink to='/login'>
              <button className="navbar-button" style={{ color: isHomePage ? 'white' : 'black', borderColor: isHomePage ? 'white' : 'black' }}>Sign in</button>
            </NavLink>
          ) : (
            <NavLink to='/signup'>
              <button className="navbar-button" style={{ color: isHomePage ? 'white' : 'black', borderColor: isHomePage ? 'white' : 'black' }}>Sign up</button>
            </NavLink>
          )
        )}
        {isLoggedIn && (
          <button className="navbar-button" style={{ color: isHomePage ? 'white' : 'black', borderColor: isHomePage ? 'white' : 'black' }}>Logout</button>
        )}
      </div>
      <div className="mobile-navbar-btn">
        {menuOpen ? (
          <CgClose className="mobile-nav-icon" onClick={toggleMenu} />
        ) : (
          <CgMenu className="mobile-nav-icon" onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

