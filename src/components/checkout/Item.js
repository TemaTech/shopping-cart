import React, { useState, useEffect } from "react";

export const Item = ({ product, incrementAmount, decrementAmount, calculateTotal }) => {
  const [amount, setAmount] = useState(product.amount);

  useEffect(() => {
    calculateTotal();
  }, [amount]);

  return (
    <div className="checkout-item">
      <div className="checkout-item-general">
        <p>Name: { product.name }</p>
        <p>Single item price: ${ product.priceFor1 }</p>
        <p>Price: ${ product.price }</p>
      </div>
      <div className="checkout-item-amount">
        <button onClick={() => {
          decrementAmount(product.name);
          setAmount(product.amount);
        }}>-</button>
        <p>{ amount }</p>
        <button onClick={() => {
          incrementAmount(product.name);
          setAmount(product.amount);
        }}>+</button>
      </div>
    </div>
  );
}