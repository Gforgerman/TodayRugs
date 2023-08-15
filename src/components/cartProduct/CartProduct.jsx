import "./CartProduct.scss";

const CartProduct = ({ greeting }) => {
  return (
    <div className="today-cartproduct">
      <div className="contenedoritem">
        <p>{greeting}</p>
      </div>
    </div>
  );
};

export default CartProduct;
