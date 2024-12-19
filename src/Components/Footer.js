import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons"; // Import desired icons
import "../CSS/Footer.css";

function Footer() {
  return (
    <footer>
      <p>Thank you so much for your support!</p>
      <p>
        For any inquiries, contact us at{" "}
        <a href="mailto:ejsquare@gmail.com" style={{ color: "#FFFFFF" }}>
          ejsquare@gmail.com
        </a>
      </p>
      <div className="social-icons">
        <a href="https://www.facebook.com/ej.square.1/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/ej_square/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://shopee.ph/ej_square?page=0" target="_blank" rel="noopener noreferrer">
          <img src="/shopee.png" alt="Shopee" className="shopee-icon" />
        </a>
        <a href="https://www.tiktok.com/@ej.square" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} />
        </a>

      </div>
    </footer>
  );
}

export default Footer;
