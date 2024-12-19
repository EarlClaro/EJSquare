import React from "react";
import "../CSS/Product.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      {/* Use dangerouslySetInnerHTML to render HTML inside description */}
      <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
      <a href={product.link} className="btn" target="_blank" rel="noopener noreferrer">
        Order Now
      </a>
    </div>
  );
}

export default ProductCard;
