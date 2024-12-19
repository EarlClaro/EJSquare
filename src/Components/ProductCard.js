import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <a href="#" className="btn">Order Now</a>
    </div>
  );
}

export default ProductCard;
