import './CartWidget.scss';
import Cart from './../../../../assets/icons/cart.svg';
import { useShoppingCart } from '../../../../context/ShoppingCartContext';

const CartWidget = ({ onClick }) => {
  const { cartItemCount } = useShoppingCart(); 
  
  return (
    <div onClick={onClick} className={`today-CartWidget ${onClick}`}>
      <div className="contain">
        <img src={Cart} />
        <div className="bluecircle">
          <p>{cartItemCount}</p>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
