import React from "react";
import '../CSS/Header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="ejsquare_logo.png" alt="Logo" />
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
