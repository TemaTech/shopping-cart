import React from "react";
import { CheckoutItems } from "./checkout/CheckoutItems";

export const ShoppingBag = ({ toggleBag, products, incrementAmount, decrementAmount, total, calculateTotal }) => {
  

  return (
    <div className="shopping-bag-bg">
      <div className="shopping-bag">
        <button onClick={() => toggleBag(false)}>x</button>
        <div>
          <CheckoutItems
            total={total}
            incrementAmount={incrementAmount}
            decrementAmount={decrementAmount}
            products={products}
            toggleBag={toggleBag}
            calculateTotal={calculateTotal}
          />
        </div>
      </div>
    </div>
  );
}
