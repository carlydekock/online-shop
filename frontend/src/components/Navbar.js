import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = ({click}) => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

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
              <span className="Cart-total">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>
      <div className="Hamburger-menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar;