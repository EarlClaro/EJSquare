import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductsSection from "./Components/ProductsSection";
import About from "./Components/About"; // Import the About component
import Hero from "./Components/Hero";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <main>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<ProductsSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<App />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
