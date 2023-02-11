import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Navbar } from "./Navbar";
import { ShoppingBag } from "./ShoppingBag";
import "./styles/app.css";

export const App = () => {
  const [shoppingBagVisible, setShoppingBagVisible] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar setShoppingBag={setShoppingBagVisible} />
        {shoppingBagVisible && (
          <ShoppingBag setShoppingBag={setShoppingBagVisible} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
