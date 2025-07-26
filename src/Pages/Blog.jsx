import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";

function Blogs() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: "pressure",
      title: "Managing Blood Pressure Naturally: Tips That Work",
      category: "HEALTH",
      date: "June 2025",
      author: "Dr. G. C. Prasanna Kumar",
      image: img1,
    },
    {
      id: "cough",
      title: "When to See a Doctor for a Cough That Won’t Go Away",
      category: "HEALTH",
      date: "June 2025",
      author: "Dr. G. C. Prasanna Kumar",
      image: img2,    
    },
    {
      id: "diabetes",
      title: "Diabetes-Friendly Foods for Indian Households",
      category: "NUTRITION",
      date: "June 2025",
      author: "Dr. G. C. Prasanna Kumar",
      image: img3,
    }
  ];

  return (
    <div
      style={{
        backgroundColor: "#e0e0e0", // light grey sides
        minHeight: "100vh",
        padding: "50px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#ffffff", // white card area
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#111" }}>Blog</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              style={{
                background: "#fff",
                padding: "10px",
                cursor: "pointer",
                width: "100%",
                boxShadow: "0 0 6px rgba(0,0,0,0.1)",
                borderRadius: "8px",
              }}
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <img
                src={blog.image}
                alt="blog"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "12px",
                  color: "#880e4f",
                  fontWeight: "bold",
                }}
              >
                {blog.category}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  margin: "5px 0",
                }}
              >
                {blog.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#555",
                }}
              >
                {blog.date} – {blog.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
