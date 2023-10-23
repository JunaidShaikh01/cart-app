import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <div className="header">
      <div>
        <h3>Melas Cart</h3>
      </div>
      <div>
        <HeaderCartButton onClick={props.onShowModal} />
      </div>
    </div>
  );
}
