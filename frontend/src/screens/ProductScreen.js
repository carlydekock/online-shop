import './ProductScreen.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';


const ProductScreen = ({ match, history }) => {

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const handleAddToCart = () => {
    dispatch(addToCart(product._id, qty));
    history.push('/cart');
  }
  
  return (
    <div className="ProductScreen">
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
        <>
          <div className="ProductScreen-left">
            <div className="left-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left-info">
              <p className="left-name">{product.name}</p>
              <p className="left-price">Price: ${product.price}</p>
              <p className="left-description">Description: {product.description}</p>
            </div>
          </div>
          <div className="ProductScreen-right">
            <div className="right-info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((key) => (
                    <option key={key+1} value={key+1}>{key+1}</option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={handleAddToCart}>Add To Cart</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductScreen;