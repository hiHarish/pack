// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/main.css';
import ScrollToTop from "./components/Scrolltotop";
import Address from './components/Address';
import Logo from './components/Logo';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ServiceDetails from "./Pages/ServiceDetail";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Contact from "./Pages/Contact";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-gray-800">
        <Address />
        <hr className='Hrr' />
        <Logo />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/ServiceDetail/:id" element={<ServiceDetails />} />
           <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
