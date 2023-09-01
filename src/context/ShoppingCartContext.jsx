import { createContext, useContext, useState } from 'react';

export const ShoppingCartContext = createContext(null);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = ( image, name, quantity, price) => {
    const newCartItem = { image, name, quantity, price };
    setCartItems([...cartItems, newCartItem]);
    setCartItemCount(cartItemCount + quantity);
  };

  const removeItemFromCart = (itemName) => {
    const updatedCart = cartItems.filter((item) => item.name !== itemName); // Cambia "productName" a "name"
    setCartItems(updatedCart);
    const itemToRemove = cartItems.find((item) => item.name === itemName);
    if (itemToRemove) {
      setCartItemCount(cartItemCount - itemToRemove.quantity);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setCartItemCount(0); // Establece el recuento de elementos en 0 al vaciar el carrito
  };

  const value = {
    cartItems,
    addToCart,
    cartItemCount, 
    clearCart,
    removeItemFromCart
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
