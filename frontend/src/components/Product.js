import {Link} from 'react-router-dom';
import './Product.css';

const Product = ({imageUrl, name, price, description, productId}) => {
  return (
    <div className="Product">
      <img src={imageUrl} alt={name} />
      <div className="Product-info">
        <p className="info-name">{name}</p>
        <p className="info-description">{description}</p>
        <p className="info-price">${price}</p>
        <Link to={`/product/${productId}`}className="info-button">View</Link>
      </div>
    </div>
  )
}

export default Product;