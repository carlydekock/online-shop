import {Link} from 'react-router-dom';
import './Product.css';

const Product = () => {
  return (
    <div className="Product">
      <img src="./img/tent.png" alt="Product name" />
      <div className="Product-info">
        <p className="info-name">Product 1</p>
        <p className="info-description">Product info here...</p>
        <p className="info-price">$499.99</p>
        <Link to={`/product/${111}`}className="info-button">View</Link>
      </div>
    </div>
  )
}

export default Product;