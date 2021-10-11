import './CartScreen.css';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  return (
    <div className="CartScreen">
      <div className="CartScreen-left">
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="CartScreen-right">
        <div className="CartScreen-info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen;