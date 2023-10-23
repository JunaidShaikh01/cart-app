import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import CartContext from "../../Context/cartContext";
import CartItem from "./CartItem";
export default function Cart(props) {
  const { cartContext } = useContext(CartContext);

  const hasItems = cartContext.items.length > 0;
  console.log("hasItems", hasItems);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem(item);
  };
  const cartItem = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <CartItem
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper" onClick={props.onCloseModal}></div>
      <div className="modal-container">
        {cartItem}
        <button onClick={props.onCloseModal}>Close Modal</button>
        {hasItems ? (
          <button>Order</button>
        ) : (
          <p>There Is No Item Selected Please Select The Item First</p>
        )}
      </div>
    </>,
    document.querySelector(".myPortalModalDiv")
  );
}
