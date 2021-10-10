import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">
        <h2>MERN Shop</h2>
      </div>
      <ul className="Navbar-links">
        <li>
          <Link to="/cart" className="Cart-link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="Cart-total">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>
      <div className="Hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar;