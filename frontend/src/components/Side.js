import React from 'react';
import {Link} from 'react-router-dom';
import './Side.css';

const Side = ({show, click}) => {

  const sideClass = ["Side"];
  if(show){
    sideClass.push('show');
  }
  return (
    <div className={sideClass.join(" ")}>
      <ul className="Side-links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart
              <span className="Side-cart-total">0</span>
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