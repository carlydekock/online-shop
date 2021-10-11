import './CartScreen.css';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import CartItem from '../components/CartItem';

import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const handleQtyChange = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
  };

  return (
    <div className="CartScreen">
      <div className="CartScreen-left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : cartItems.map(item => (
          <CartItem key={item.product} item={item} handleQtyChange={handleQtyChange} handleDelete={handleDelete}/>
        ))
        }
      </div>
      <div className="CartScreen-right">
        <div className="CartScreen-info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubtotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen;