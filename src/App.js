import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Context/CartProvider";
import Cart from "./Components/Cart/Cart";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showCartModal = () => {
    setShowModal(true);
  };
  const closeCartModal = () => {
    setShowModal(false);
  };
  return (
    <CartProvider>
      {showModal && <Cart onCloseModal={closeCartModal} />}
      <Header onShowModal={showCartModal} />
      <Meals />
    </CartProvider>
  );
}

export default App;
