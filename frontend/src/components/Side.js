import React from 'react';
import {Link} from 'react-router-dom';
import './Side.css';
import { useSelector } from 'react-redux';

const Side = ({show, click}) => {

  const sideClass = ["Side"];
  if(show){
    sideClass.push('show');
  }

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <div className={sideClass.join(" ")}>
      <ul className="Side-links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart
              <span className="Side-cart-total">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  )
}

export default Side;