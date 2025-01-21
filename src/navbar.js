import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from './pages/home';
import Login from './pages/signin';
import Register from './pages/signup.js';

function navbar() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<div>About Us</div>} />
            <Route path="/products" element={<div>Our Products</div>} />
            <Route path="/contact" element={<div>Contact Us</div>} />
            <Route path="/signin" element={<Login/>} />
            <Route path="/signup" element={<Register/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default navbar;