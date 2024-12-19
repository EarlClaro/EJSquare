import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductsSection from "./Components/ProductsSection";
import About from "./Components/About"; // Import the About component
import Hero from "./Components/Hero";
import ContactUs from "./Components/ContactUs";

function App() {
  const location = useLocation(); // Use useLocation to get the current route

  return (
    <>
      <Header />
      {/* Render Hero only on the Home page */}
      {location.pathname === "/" && <Hero />}
      <main>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<ProductsSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} /> {/* Add this route */}

        </Routes>
      </main>
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
