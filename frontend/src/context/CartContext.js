import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "REMOVE":
  return state.filter(
    (item) => item._id !== action.payload
  );
    case "ADD": {
      const existing = state.find(
        (item) => item._id === action.payload._id
      );

      if (existing) {
        return state.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, qty: 1 }];
    }

    case "INCREASE":
      return state.map((item) =>
        item._id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item
      );

    case "DECREASE":
      return state
        .map((item) =>
          item._id === action.payload
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0);

    case "CLEAR":
       return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) =>
    dispatch({ type: "ADD", payload: product });

  const increaseQty = (id) =>
    dispatch({ type: "INCREASE", payload: id });

  const decreaseQty = (id) =>
    dispatch({ type: "DECREASE", payload: id });
  const removeItem = (id) =>
  dispatch({ type: "REMOVE", payload: id });

  const clearCart = () =>
  dispatch({ type: "CLEAR" });


  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
