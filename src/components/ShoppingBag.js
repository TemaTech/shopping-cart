import React from "react";
import { CheckoutItems } from "./checkout/CheckoutItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const ShoppingBag = ({ toggleBag, products, incrementAmount, decrementAmount, total, calculateTotal }) => {
  return (
    <div className="shopping-bag-bg">
      <div className="shopping-bag">
        <button id="close-btn" onClick={() => toggleBag(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <CheckoutItems
          total={total}
          incrementAmount={incrementAmount}
          decrementAmount={decrementAmount}
          products={products}
          toggleBag={toggleBag}
          calculateTotal={calculateTotal}
        />
        <button id="checkout" onClick={() => alert("Thank you for your purchase! We appreciate your business and hope you enjoy your new item. If you have any questions or concerns, please don't hesitate to contact us.")}>
          Checkout
        </button>
      </div>
    </div>
  );
}
