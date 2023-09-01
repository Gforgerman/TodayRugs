import { Button } from '@chakra-ui/react';
import { useShoppingCart } from '../../../../context/ShoppingCartContext';
import Text from '../text/Text';
import './CartProduct.scss';

const CartProduct = ({ image, name, quantity, price }) => {
  const { removeItemFromCart } = useShoppingCart();

  const handleRemoveItem = () => {
    removeItemFromCart(name);
  };
  return (
    <div className="today-cartproduct">
      <div className="contenedoritem">
        <div className="cart-card">
          <Button colorScheme='red' onClick={handleRemoveItem}>
            <Text tag={'p'} weight={'heavy'}>x</Text>
          </Button>
          <img src={image}/> {/* imagen aquí */}
          <Text tag={'p'} weight={'heavy'}>{name}</Text>
          <Text tag={'p'}> {quantity}</Text>
          <Text tag={'p'}>${price}</Text>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
