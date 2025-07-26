import React from "react";
import "../styles/main.css";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
      <div className="Logo">
        <ul className="nav-links">
          <li><div className="logo">
            <img src={logo} alt="SKANDHA" /></div></li>
          <li><p className="pp">CLINIC TIMINGS:</p>
          <b><p>MON - SUN: 10:30 AM - 10:00 PM</p></b></li>
           <li><p className="pp">PHONE</p>
           <b><p>+91-9533210900</p></b></li>
        </ul>
      </div>
  );
};

export default Logo;
