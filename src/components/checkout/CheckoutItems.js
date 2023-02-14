import React from "react";
import { Item } from "./Item";

export const CheckoutItems = ({ products, decrementAmount, incrementAmount, total, calculateTotal }) => {
  return (
    <div className="checkout-items">
      {
        products.map(product => (
          <Item
            key={product.name}
            product={product}
            decrementAmount={decrementAmount}
            incrementAmount={incrementAmount}
            calculateTotal={calculateTotal}
          />
        ))
      }
      <div className="total">
        <p>Total:</p>
        <p>${ total }</p>
      </div>
    </div>
  );
}
