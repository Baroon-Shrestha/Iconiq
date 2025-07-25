import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar"; // Not used in this snippet, can be removed if unused
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Client from "./Pages/Client";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import Pricing from "./Pages/Pricing";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <div className="m-6">
        <Toaster position="top-center" />
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/client" element={<Client />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
