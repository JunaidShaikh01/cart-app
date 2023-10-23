import React from "react";
import classes from "./CartItem.module.css";
export default function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.cartItemList}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className="price">{price}</span>
          <span className={classes.amount}>X{props.amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
}
