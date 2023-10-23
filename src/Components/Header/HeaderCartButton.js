import React from "react";
import "./HeaderCartButton.css";
// import CartContext from "../../Context/cartContext";
export default function HeaderCartButton(props) {
  return (
    <button className="button" onClick={props.onClick}>
      <span>Cart</span>
      <span>3</span>
    </button>
  );
}
