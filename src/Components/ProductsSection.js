import React from "react";
import "../CSS/Product.css";
import ProductCard from "./ProductCard";

function ProductsSection() {
  const products = [
    {
      id: 1,
      img: "/memopads.png",
      title: "Memo Pads",
      description: "<span class='highlight'>Available</span>\nSize: 3.5X3.5 INCHES",
      link: "https://shopee.ph/ej_square?shopCollection=246103033#product_list",
    },
    {
      id: 2,
      img: "/totebags.png",
      title: "Tote Bags",
      description: "<span class='highlight'>Available</span>\nStudio Ghibli, Genshin",
      link: "https://shopee.ph/ej_square?page=0&shopCollection=246231482",
    },
    {
      id: 3,
      img: "/keychains.png",
      title: "Keychains",
      description: "<span class='highlight'>Available</span>\nPerler, Acrylic",
      link: "https://shopee.ph/ej_square?page=0&shopCollection=125612134",
    },
    {
      id: 4,
      img: "/stickers.png",
      title: "Stickers",
      description: "<span class='highlight'>Available</span>\nMatte, Glossy",
      link: "https://shopee.ph/ej_square?page=0&shopCollection=125612510",
    },
    {
      id: 5,
      img: "/buttonpins.png",
      title: "Button Pins",
      description: "<span class='highlight'>Available</span>\nSize: 2.25\", 1.75\"",
      link: "https://shopee.ph/ej_square?page=0&shopCollection=125611454",
    },
    {
      id: 6,
      img: "/phonecharms.png",
      title: "Genshin Impact",
      description: "<span class='highlight'>Available</span>",
      link: "https://shopee.ph/ej_square?shopCollection=157544535#product_list",
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
