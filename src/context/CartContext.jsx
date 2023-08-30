import { Children, createContext,  useState } from 'react';

export const CartContext = createContext(null);

const CartProvider = ({children}) => {
  const [cartArray, setCartArray] = useState([]); 

  const addToCart = (producto, cantidad, precio) =>{
    
  };

  const value = {
    cartArray,
    
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;