import { useReducer } from "react";
import CartContext from "./cartContext";
const caratReducer = (state, action) => {
  console.log("...state", state);
  console.log("...state.items", ...state.items);
  console.log("action.payload", action.payload);

  if (action.type === "ADD_TO_CART") {
    return { ...state, items: [...state.items, action.payload] };
  }

  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartitemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartitemIndex];
    let updatedItems;

    if (existingCartItem) {
      //   let updatedItem;
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartitemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartitemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartitemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartitemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    caratReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCarthandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    price: cartState.price,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCarthandler,
  };
  console.log("cartState", cartState);
  return (
    <CartContext.Provider
      value={{ cartState, dispatchCartAction, cartContext }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
