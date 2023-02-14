import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export const Home = () => {
  return (
    <div className="home">
      <p>"Embrace the Power of Color, Let it Illuminate Your Path to Discovery."</p>
      <Link to="/shop"><p>Explore Our Color Collection</p></Link>
    </div>
  );
}
