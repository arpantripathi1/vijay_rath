import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import Swal from 'sweetalert2';
import '../styles/Nav.css';
import { AuthContext } from '../context/AuthContext';

const Navbar = ({ isHomePage }) => {
  const location = useLocation();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const pathName = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        setMenuOpen(false);
      }
    });
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
          {isLoggedIn && (
            <li>
              <NavLink
                to="#"
                className="navbar-mobile-logout-button navbar-link"
                style={{ color: isHomePage ? 'white' : 'black', borderColor: isHomePage ? 'white' : 'black' }}
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </li>
          )}
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
      </div>
      <div className="mobile-navbar-btn">
        {menuOpen ? (
          <CgClose className="mobile-nav-icon" onClick={toggleMenu} />
        ) : (
          <CgMenu className="mobile-nav-icon" onClick={toggleMenu} />
        )}
      </div>
      {menuOpen && (
        <div className="mobile-navbar-actions">
          {!isLoggedIn ? (
            <NavLink to='/login' onClick={toggleMenu}>
              <button className="navbar-button" style={{ color: isHomePage ? 'white' : 'black', borderColor: isHomePage ? 'white' : 'black' }}>Sign in</button>
            </NavLink>
          ) : (
            <button
              className="navbar-button"
              style={{ color: isHomePage ? 'white' : 'black', borderColor: isHomePage ? 'white' : 'black' }}
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
