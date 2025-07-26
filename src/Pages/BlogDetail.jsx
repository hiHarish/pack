import React from "react";
import { useParams, Link } from "react-router-dom";
import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png"; 
import img3 from "../assets/blog3.png";

const blogContent = {
  pressure: {
    title: "Managing Blood Pressure Naturally: Tips That Work",
    category: "HEALTH",
    date: "June 2025",
    author: "Dr. G. C. Prasanna Kumar",
    image: img1,
    intro: "Learn simple lifestyle changes and effective dietary practices that help manage high blood pressure without complications.",
    heading: "Tips for Daily Routine",
    text: "Include regular exercise, reduce sodium intake, stay hydrated, and monitor your blood pressure regularly.",
    quote: "The best medicine is a healthy lifestyle. Prevention is always better than cure.",
  },
  cough: {
    title: "When to See a Doctor for a Cough That Won’t Go Away",
    category: "HEALTH",
    date: "June 2025",
    author: "Dr. G. C. Prasanna Kumar",
    image: img2,
    intro: "Understand the warning signs that a persistent cough might indicate an underlying condition requiring medical attention.",
    heading: "Red Flags",
    text: "Watch out for blood in phlegm, shortness of breath, chest pain, or cough lasting more than 3 weeks.",
    quote: "Early diagnosis leads to better outcomes. Don’t ignore chronic symptoms.",
  },
  diabetes: {
    title: "Diabetes-Friendly Foods for Indian Households",
    category: "NUTRITION",
    date: "June 2025",
    author: "Dr. G. C. Prasanna Kumar",
    image: img3,
    intro: "Explore nutritious Indian food options that support sugar control while keeping meals delicious and satisfying.",
    heading: "Recommended Foods",
    text: "Incorporate whole grains, lentils, vegetables, and low-GI fruits while avoiding added sugars and refined carbs.",
    quote: "Eating right is the first step in managing diabetes effectively.",
  }
};

function BlogDetail() {
  const { id } = useParams();
  const blog = blogContent[id];

  return (
    <div style={{ padding: "60px 20px", background: "#f5f5f5", minHeight: "100vh", display: "flex", justifyContent: "center" }}>
      <div style={{
        background: "#fff",
        padding: "30px 40px",
        maxWidth: "700px",
        width: "100%",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "12px", marginBottom: "20px", textAlign: "left" }}>
          <Link to="/blogs" style={{ color: "#888", textDecoration: "none" }}>Home</Link> / Blog /{" "}
          <span style={{ color: "#5f8c00" }}>{blog.title}</span>
        </div>

        <h1 style={{ fontSize: "26px", fontWeight: "600", marginBottom: "20px" }}>{blog.title}</h1>

        <img src={blog.image} alt={blog.title} style={{ width: "100%", maxHeight: "300px", objectFit: "cover", marginBottom: "20px", borderRadius: "8px" }} />

        <div style={{ fontSize: "12px", color: "#b71c1c", marginBottom: "5px" }}>{blog.category}</div>
        <div style={{ fontSize: "13px", color: "#444", marginBottom: "20px" }}>
          {blog.date} by <strong>{blog.author}</strong>
        </div>

        <p style={{ fontSize: "14px", color: "#444", lineHeight: "1.6", marginBottom: "20px" }}>{blog.intro}</p>

        <h4 style={{ marginTop: "20px", fontWeight: "600", marginBottom: "10px" }}>{blog.heading}</h4>
        <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.6" }}>{blog.text}</p>

        <blockquote style={{
          fontStyle: "italic",
          fontSize: "16px",
          marginTop: "30px",
          color: "#333",
          background: "#f0f0f0",
          padding: "15px 20px",
          borderLeft: "5px solid #880e4f",
          borderRadius: "8px"
        }}>
          ❝ {blog.quote}
        </blockquote>
      </div>
    </div>
  );
}

export default BlogDetail;
