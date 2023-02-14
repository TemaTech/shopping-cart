import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/homePage/Home";
import { Shop } from "./components/shopPage/Shop";
import { Navbar } from "./components/Navbar";
import { ShoppingBag } from "./components/ShoppingBag";
import "./components/styles/app.css";

export const App = () => {
  const [shoppingBagVisible, setShoppingBagVisible] = useState(false);
  const [shoppingBag, setShoppingBag] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    calculateTotal();
  }, [shoppingBag]);

  function calculateTotal() {
    let newTotal = 0;
    for (let i = 0; i < shoppingBag.length; i++) {
      newTotal += shoppingBag[i].price;
    }
    setTotal(newTotal);
  }

  function addProduct(name, priceFor1, amount) {
    for (let i = 0; i < shoppingBag.length; i++) {
      if (shoppingBag[i].name === name) {
        const shoppingBagRef = shoppingBag;
        shoppingBagRef[i].amount = Math.floor((shoppingBagRef[i].amount + parseInt(amount)) * 100) / 100;
        shoppingBagRef[i].price = Math.floor((parseFloat(priceFor1.split('$')[1]) * parseInt(shoppingBagRef[i].amount)) * 100) / 100;
        setShoppingBag(shoppingBagRef);
        return;
      }
    }

    const newProduct = {
      name: name,
      price: Math.floor((parseFloat(priceFor1.split('$')[1]) * parseInt(amount)) * 100) / 100,
      amount: amount,
      priceFor1: parseFloat(priceFor1.split('$')[1])
    }

    const shoppingBagRef = shoppingBag;
    shoppingBagRef.push(newProduct);
    setShoppingBag(shoppingBagRef);
  }

  function incrementAmount(name) {
    for (let i = 0; i < shoppingBag.length; i++) {
      if (shoppingBag[i].name === name) {
        const shoppingBagRef = shoppingBag;
        shoppingBagRef[i].amount += 1;
        shoppingBagRef[i].price = Math.floor((shoppingBagRef[i].priceFor1 * shoppingBagRef[i].amount) * 100) / 100;
        setShoppingBag(shoppingBagRef);
      }
    }
  }

  async function decrementAmount(name) {
    for (let i = 0; i < shoppingBag.length; i++) {
      if (shoppingBag[i].name === name) {
        const shoppingBagRef = shoppingBag;
        let ref = shoppingBagRef[i].amount;
        if (ref -= 1 > 0) {
          shoppingBagRef[i].amount -= 1;
          shoppingBagRef[i].price = Math.floor((shoppingBagRef[i].priceFor1 * shoppingBagRef[i].amount) * 100) / 100;
        } else {
          shoppingBagRef.splice(i, 1);
        }
        await setShoppingBag(shoppingBagRef);
        calculateTotal();
      }
    }
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar setShoppingBag={setShoppingBagVisible} />
        {shoppingBagVisible && (
          <ShoppingBag
            total={total}
            calculateTotal={calculateTotal}
            incrementAmount={incrementAmount}
            decrementAmount={decrementAmount}
            products={shoppingBag}
            toggleBag={setShoppingBagVisible}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addProduct={addProduct} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
