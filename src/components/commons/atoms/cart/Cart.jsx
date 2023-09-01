import { useShoppingCart } from '../../../../context/ShoppingCartContext';
import CartProduct from '../cartProduct/CartProduct';
import EmptyCart from '../emptyCart/EmptyCart';
import Text from '../text/Text';
import './Cart.scss';
import { Button } from '@chakra-ui/react';


const Cart = () => {
  const { clearCart, cartItems, removeItemFromCart } = useShoppingCart();
  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  


  return (
    <div className="today-cart">
      <div className="cart-contain">
        {cartItems.length === 0 ? ( ''
        ) : (<div className="letalbtn">
          <Button onClick={clearCart} colorScheme='red'> 
            <Text tag={'p'} weight={'heavy'}>VACÍAR CARRITO</Text>
          </Button>
        </div>)}
        {cartItems.length === 0 ? ( // Verifica si no hay productos en el carrito
          <EmptyCart/>
        ) : (
          cartItems.map((item, index) => (
            <CartProduct
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => removeItemFromCart(item.name)}
            />
          ))
        )}
        {cartItems.length === 0 ? ( ''
        ) : (
          <div className="total">
            <hr/>
            <div className="gasto-total">
              <Text tag={'p'}>Costo total a pagar</Text>
              <Text tag={'p'}>${calculateTotalCost()}</Text>
            </div>
            <div className='checkoutbtn'>
              <Button colorScheme='messenger'> 
                <Text tag={'p'} weight={'heavy'}>CHECK OUT</Text>
              </Button>
            </div>
          </div>)}
      </div>
    </div>
  );
};

export default Cart;
