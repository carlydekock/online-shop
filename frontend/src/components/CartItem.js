import './CartItem.css';
import {Link} from 'react-router-dom';

const CartItem = () => {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src="../img/tent.png" alt="Product name"/>
      </div>
      <Link to={`/product/${111}`} className="CartItem-name">
        <p>Product 1</p>
      </Link>
      <p className="CartItem-price">$499.99</p>
      <select className="CartItem-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="CartItem-delete">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartItem;