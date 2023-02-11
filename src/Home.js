import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

export const Home = () => {
  return (
    <div className="home">
      <p>Buy <span id="whatever">whatever</span> <span id="color">color</span> you want.</p>
      <Link to="/shop"><p>Shop colors</p></Link>
    </div>
  );
}
