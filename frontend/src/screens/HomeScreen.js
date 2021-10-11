import './HomeScreen.css';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <h2 className="HomeScreen-title">Latest Products</h2>
      <div className="HomeScreen-products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default HomeScreen;