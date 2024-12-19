import React from "react";
import '../CSS/Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
      <a href="/">
          <img src="ejsquare_logo.png" alt="Logo" />
        </a>
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="https://shopee.ph/ej_square#product_list" target="_blank" rel="noopener noreferrer">
        Products
        </a>
        <a href="/contact">Contact Us</a>
        </nav>
    </header>
  );
}

export default Header;
