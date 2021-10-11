import './CartItem.css';
import {Link} from 'react-router-dom';

const CartItem = ({item, handleQtyChange, handleDelete}) => {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src={item.imageUrl} alt={item.name}/>
      </div>
      <Link to={`/product/${item.product}`} className="CartItem-name">
        <p>{item.name}</p>
      </Link>
      <p className="CartItem-price">${item.price}</p>
      <select className="CartItem-select" value={item.qty} onChange={(e) => handleQtyChange(item.product, e.target.value)}>
        {[...Array(item.countInStock).keys()].map(element => (
          <option key={element+1} value={element+1}>{element+1}</option>
        ))}
      </select>
      <button className="CartItem-delete" onClick={() => handleDelete(item.product)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartItem;