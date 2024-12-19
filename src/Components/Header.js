import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="logo-placeholder.png" alt="Logo" />
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
