import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import "./styles/navbar.css";

export const Navbar = ({ setShoppingBag }) => {
  return (
    <div className="navbar">
      <Link to="/"><p>Chroma Haven</p></Link>
      <div className="navigation">
        <Link to="/"><p>Home</p></Link>
        <Link to="/shop"><p>Catalog</p></Link>
        <button data-testid="shopping-bag-button" onClick={() => setShoppingBag(true)}>
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  );
}
