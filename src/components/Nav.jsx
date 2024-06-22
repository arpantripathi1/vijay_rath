import React , {useState} from 'react';
import { NavLink } from 'react-router-dom' ;
// import styled from "styled-components" ;
import { CgMenu , CgClose } from "react-icons/cg" ;
import "../styles/Nav.css";

const Nav = ({isHomePage}) => {

    const [menuIcon , setMenuIcon] = useState();

    return (
        <div className={menuIcon ? "navbar active" : "navbar"}  style={{color: isHomePage ? 'white' : 'black' }}>
          <ul className="navbar-lists">
            <li>
              <NavLink
                to="/"
                className="navbar-link home-link"
                onClick={() => setMenuIcon(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                Contact
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/cart" className="navbar-links cart-trolley--link" >
                <FiShoppingCart className="cart-trolley" />
                <span className="cart-total--item"> 10 </span>
              </NavLink>
            </li> */}
          </ul>

          {/* two buttons for open and close the menu*/}

          <div className="mobile-navbar-btn">
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
            <CgClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          </div>
        </div>

    );
};



export default Nav;