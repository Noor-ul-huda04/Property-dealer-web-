import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PropertyContext } from "./context/PropertyContext";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/home";
import PropertiesPage from "./pages/PropertiesPage";
import AgentsPage from "./pages/Agents";
import ContactPage from "./pages/ContactPage";
import TransportationPage from "./pages/Transportation";
import SellhousePage from "./pages/SellhousePage";
import "./App.css";
import PropertyDetail from "./components/PropertyDetail";

export default function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties([
      { id: 1, title: "Luxury Villa", price: "250,000", location: "Islamabad", image: "/house-pic.png" },
      { id: 2, title: "Modern Apartment", price: "120,000", location: "Lahore", image: "/house-pic2.png" },
      { id: 3, title: "Family House", price: "180,000", location: "Karachi", image: "/house-pic4.png" },
    ]);
  }, []);

  return (
    <PropertyContext.Provider value={{ properties }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/transportation" element={<TransportationPage />} />
          <Route path="/sell-house" element={<SellhousePage />} /> 
            <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
        <Footer />
      </Router>
    </PropertyContext.Provider>
  );
}
