import React from "react";

export const ShoppingBag = ({ setShoppingBag }) => {
  return (
    <div className="shopping-bag">
      <button onClick={() => setShoppingBag(false)}>x</button>
      shopping bag
    </div>
  );
}
