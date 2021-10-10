import './ProductScreen.css';

const ProductScreen = () => {
  return (
    <div className="ProductScreen">
      <div className="ProductScreen-left">
        <div className="left-image">
          <img src="../img/tent.png" alt="Product name" />
        </div>
        <div className="left-info">
          <p className="left-name">Product 1</p>
          <p className="left-price">Price: $499.99</p>
          <p className="left-description">Description: Product info here...</p>
        </div>
      </div>
      <div className="ProductScreen-right">
        <div className="right-info">
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty 
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen;