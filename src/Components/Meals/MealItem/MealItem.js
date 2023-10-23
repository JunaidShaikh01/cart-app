import React, { useContext } from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Context/cartContext";
// import CartContext from "../../../Context/cartContext";
export default function MealItem(props) {
  // const cartCtx = useContext(CartContext);
  const { dispatchCartAction } = useContext(CartContext);
  const addToCartHandler = (amount) => {
    const orderList = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    };
    dispatchCartAction({ type: "ADD_TO_CART", payload: orderList });
  };
  return (
    <li key={props.id} className="mealItem">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">${props.price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
