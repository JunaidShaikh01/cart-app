import React, { useState } from "react";

export default function MealItemForm(props) {
  const [inputValue, setInputValue] = useState(1);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enterdValue = inputValue;
    if (enterdValue < 1 || enterdValue > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterdValue);
  };
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const enterdAmount = amountInputRef.current.value;
  //   const enterdAmountNumber = +enterdAmount;
  //   if (
  //     enterdAmount.trim() === 0 ||
  //     enterdAmountNumber < 1 ||
  //     enterdAmountNumber > 5
  //   ) {
  //     setAmountIsValid(false);
  //     return;
  //   }
  //   props.onAddToCart(enterdAmountNumber);
  // };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        min="1"
        max="5"
        step="1"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button>+Add</button>
      {!amountIsValid ? <p>Please Enter A Valid Amount</p> : ""}
    </form>
  );
}
