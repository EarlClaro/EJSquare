import React from "react";
import "./ProductsSection.css";
import ProductCard from "./ProductCard";

function ProductsSection() {
  const products = [
    {
      id: 1,
      img: "product1-placeholder.png",
      title: "Art Prints",
      description: "Available \n Size: A4, 5R \n From 60 PHP",
    },
    {
      id: 2,
      img: "product2-placeholder.png",
      title: "Tote Bags",
      description: "Available \n Studio Ghibli, Genshin \n From 400 PHP",
    },
    {
      id: 3,
      img: "product3-placeholder.png",
      title: "Keychains",
      description: "Available \n Perler, Acrylic \n From 85 PHP",
    },
  ];

  return (
    <section className="products-section" id="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
