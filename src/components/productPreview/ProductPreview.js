import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

export const ProductPreview = ({ name, hex_code, price, addProduct }) => {
  const [count, setCount] = useState(1);

  function incrementCount() {
    if (count + 1 <= 999) {
      setCount(count + 1);
    }
  }

  function decrementCount() {
    if (count - 1 >= 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="product-item">
      <div style={{background: hex_code}} className="preview"></div>
      <div className="info">
        <div className="title-info">
          <p className="name">{ name }</p>
          <p className="price">{ price }</p>
        </div>
        <div className="shopping-info">
          <div>
            <button onClick={() => decrementCount()}>-</button>
            <p>{ count }</p>
            <button onClick={() => incrementCount()}>+</button>
          </div>
          <button
          onClick={() => addProduct(name, price, count)}
          className="add-to-shopping-bag">
            + <FontAwesomeIcon icon={faShoppingBag} />
          </button>
        </div>
      </div>
    </div>
  );
}
