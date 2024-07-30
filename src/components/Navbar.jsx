
import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import '../styles/Navbar.css';
import Swal from "sweetalert2"
import { AuthContext } from '../context/AuthContext'; // Adjust the path as needed

const Navbar = ({ isHomePage }) => {
  const location = useLocation();
  const pathName = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated ,logout} = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated);
    console.log("navbar consiole : isAuthenticated state value is ",isAuthenticated);
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
              <button 
                className="navbar-link"
                style={{ color: isHomePage ? 'white' : 'black', background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className='signup-hamburger-container'>
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
      </div>
     
    </nav>
  );
};

export default Navbar;
