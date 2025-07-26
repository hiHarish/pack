
import { useState } from "react";
import doc1 from "../assets/doc1.png";
import doc2 from "../assets/doc2.png";
import doc3 from "../assets/doc3.png";
import doc4 from "../assets/doc4.png";


const images = [doc1, doc2, doc3, doc4];
const quotes = [
  [
    "Compassionate care, trusted expertise, and personalized treatment under one roof.",
    "Your Family’s Health",
    "Our Lifelong Mission"
  ],
  [
    "Welcome to the official website of Dr. G. C. Prasanna Kumar, where your health is our priority.",
    "Expert General Physician",
    "Trusted by Thousands"
  ],
  [
    "Expert care for diabetes, hypertension, respiratory, and digestive issues.",
    "Comprehensive Medical Care",
    "For All Age Groups"
  ],
  [
    "Personalized treatment plans and preventive health for your well-being.",
    "Preventive Health Focus",
    "With Compassionate Support"
  ]
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  return (
    <section className="hero">
      <div className="hero-slider">
        <img src={images[current]} alt="Doctor" className="hero-image"  />
        <button className="slider-arrow left" onClick={prevSlide} aria-label="Previous slide">&#8592;</button>
        <button className="slider-arrow right" onClick={nextSlide} aria-label="Next slide">&#8594;</button>
        <div className="hero-quote">
          <div className="hero-quote-line1">{quotes[current][0]}</div>
          <div className="hero-quote-line2">{quotes[current][1]}</div>
          <div className="hero-quote-line3">{quotes[current][2]}</div>
        </div>
      </div>
      {/*<div className="container">
        <h1>Welcome to MediCare</h1>
        <p>Your trusted partner in health and wellness.</p>
        <button className="cta-btn">Book Appointment</button>
      </div>*/}
    </section>
  );
}