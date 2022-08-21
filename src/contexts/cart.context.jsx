import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
  const existingCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItems) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id
      ? { ...cartItem, qty: cartItem.qty + 1 }
      : cartItem);
  }

  return [...cartItems, { ...productToAdd, qty: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find the cart item to remove
  const existingCartItems = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  //check if qty is equal to 1, if it is then remove the item from cart
  if (existingCartItems.qty === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  //return back cart items with matching cart item with reduced qty
  if (existingCartItems) {
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
      ? { ...cartItem, qty: cartItem.qty - 1 }
      : cartItem);
  }
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,

  setIsCartOpen: () => { },
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
});

export const CartProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.qty;
    }, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + cartItem.qty * cartItem.price;
    }, 0);

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};