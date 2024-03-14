import React, { createContext, useReducer, useContext } from 'react';

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
      } case REMOVE_ITEM:
        return {
            ...state,
            items: state.items.reduce((acc, item) => {
            if (item.id === action.payload.id && item.quantity > 1) {
                acc.push({ ...item, quantity: item.quantity - 1 });
            } else if (item.id !== action.payload.id) {
                acc.push(item);
            }
            return acc;
            }, [])
        };
    case CLEAR_CART:
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = item => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const removeItem = itemId => {
    dispatch({ type: REMOVE_ITEM, payload: { id: itemId } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider value={{ items: state.items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar el carrito de compras
export function useCart() {
  return useContext(CartContext);
}