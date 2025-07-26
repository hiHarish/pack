import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navButtonStyle = {
    padding: "10px 15px",
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    color: scrolled ? "#f9f9f9" : "#8B0000",
    textDecoration: "none",
  };

  const handleHover = (e, isHovering) => {
    e.target.style.textDecoration = isHovering ? "underline" : "none";
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? "#9d3a3a" : "#f9f9f9",
        transition: "all 0.3s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            listStyle: "none",
            gap: "25px",
            margin: 0,
            padding: 0,
            paddingLeft: "50px",
          }}
        >
          <li>
            <button
              style={navButtonStyle}
              onClick={() => navigate("/")}
              onMouseOver={(e) => handleHover(e, true)}
              onMouseOut={(e) => handleHover(e, false)}
            >
              Home
            </button>
          </li>

          <li>
            <button
              style={navButtonStyle}
              onClick={() => navigate("/about")}
              onMouseOver={(e) => handleHover(e, true)}
              onMouseOut={(e) => handleHover(e, false)}
            >
              About
            </button>
          </li>

          <li
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            style={{ position: "relative" }}
          >
            <button
              style={navButtonStyle}
              onClick={() => navigate("/service")}
              onMouseOver={(e) => handleHover(e, true)}
              onMouseOut={(e) => handleHover(e, false)}
            >
              Services
            </button>

            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: 0,
                  background: "#fff",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  minWidth: "300px",
                  borderRadius: "8px",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "15px",
                  }}
                >
                  <div>
                    <button
                      onClick={() => navigate("/service")}
                      style={{
                        background: "none",
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "#8B0000",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) => handleHover(e, true)}
                      onMouseOut={(e) => handleHover(e, false)}
                    >
                      Our Services
                    </button>
                    <p
                      style={{
                        margin: "5px 0",
                        color: "#666",
                        fontSize: "14px",
                      }}
                    >
                      Explore a wide range of healthcare services.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "15px",
                  }}
                >
                  <div>
                    <button
                      onClick={() => navigate("/ServiceDetail/1")}
                      style={{
                        background: "none",
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "16px",
                        color: "#8B0000",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) => handleHover(e, true)}
                      onMouseOut={(e) => handleHover(e, false)}
                    >
                      Service Details
                    </button>
                    <p
                      style={{
                        margin: "5px 0",
                        color: "#666",
                        fontSize: "14px",
                      }}
                    >
                      Detailed information on each offering.
                    </p>
                  </div>
                </div>

                <button
                  style={{
                    background: "#8B0000",
                    color: "white",
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onClick={() => navigate("/service")}
                >
                  Book Service
                </button>
              </div>
            )}
          </li>

          <li>
            <button
              style={navButtonStyle}
              onClick={() => navigate("/blogs")}
              onMouseOver={(e) => handleHover(e, true)}
              onMouseOut={(e) => handleHover(e, false)}
            >
              Blog
            </button>
          </li>

          <li>
            <button
              style={{
                ...navButtonStyle,
                paddingRight: "25vw",
              }}
              onClick={() => navigate("/contact")}
              onMouseOver={(e) => handleHover(e, true)}
              onMouseOut={(e) => handleHover(e, false)}
            >
              Contact
            </button>
          </li>

          <li>
            <button
              style={{
                background: "#8B0000",
                color: "white",
                padding: "10px 18px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/service")}
            >
              Book An Appointment
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
