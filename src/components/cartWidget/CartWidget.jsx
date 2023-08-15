import "./../cartWidget/CartWidget.scss";
import Cart from "./../../assets/icons/cart.svg";

const CartWidget = ({ onClick }) => {
  return (
    <div onClick={onClick} className={`today-CartWidget ${onClick}`}>
      <div className="contain">
        <img src={Cart} />
        <div className="bluecircle">
          <p>7</p>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
