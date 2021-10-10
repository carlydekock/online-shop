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
          <Link to="/cart">
            
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;