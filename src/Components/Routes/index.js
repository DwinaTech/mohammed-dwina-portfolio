import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Experience from "../Experience";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RoutesCom = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resume" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default RoutesCom;
