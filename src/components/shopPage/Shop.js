import React from "react";
import { ProductPreview } from "../productPreview/ProductPreview";
import "../styles/shop.css";

const products = [
  {
    "name": "Space Gray",
    "hex_code": "#808080",
    "price": "$4.99"
  },
  {
    "name": "Gold",
    "hex_code": "#FFD700",
    "price": "$5.99"
  },
  {
    "name": "Rose Gold",
    "hex_code": "#B76E79",
    "price": "$6.99"
  },
  {
    "name": "Jet Black",
    "hex_code": "#000000",
    "price": "$4.99"
  },
  {
    "name": "Midnight Green",
    "hex_code": "#1C2331",
    "price": "$5.99"
  },
  {
    "name": "Product Red",
    "hex_code": "#FF0000",
    "price": "$6.99"
  },
  {
    "name": "Sapphire Blue",
    "hex_code": "#0F52BA",
    "price": "$3.99"
  },
  {
    "name": "Midnight Blue",
    "hex_code": "#1A1A1A",
    "price": "$4.99"
  },
  {
    "name": "Sunset Orange",
    "hex_code": "#FF5733",
    "price": "$5.99"
  },
  {
    "name": "Lavender",
    "hex_code": "#E6E6FA",
    "price": "$3.99"
  }
]

export const Shop = ({ addProduct }) => {
  return (
    <div className="shop">
      {
        products.map(product => (
          <ProductPreview
            addProduct={addProduct}
            key={product.hex_code}
            name={product.name}
            hex_code={product.hex_code}
            price={product.price}
          />
        ))
      }
    </div>
  );
}