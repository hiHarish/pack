import React from "react";
import { useNavigate } from "react-router-dom";
import doc from '../assets/doc3.png';
import Review from "../components/Review";
import backservice from '../assets/backservice.png';

const Services = () => {
  const navigate = useNavigate();
  return (
    <div>

      {/* Banner Section */}
      <div style={{
        backgroundImage: `url(${doc})`,
        height: "500px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: "20vh"
      }}>
        <p style={{ fontSize: "18px", letterSpacing: "2px",  }}>
          BEST SOLUTION FOR YOUR HEALTH
        </p>
        <div style={{ fontSize: "78px",  lineHeight: "1.2" }}>
          <span style={{ color: "#8B0000",fontWeight: "bold", }}>Services</span>
          <span style={{ color: "white" }}>That   </span>          
          <div style={{ color: "white" }}>We Provide</div>
        </div>
      </div>

      {/* Our Services Title */}
      <div style={{ textAlign: "center", margin: "50px auto", maxWidth: "900px" }}>
        <p style={{ fontSize: "12px", letterSpacing: "1px", color: "#555" }}>OUR SERVICES</p>
        <h2 style={{ fontSize: "48px", fontWeight: "100" }}>
          <span style={{ color: "#8B0000", fontWeight: "bold" }}>Best Solution</span>{" "}
          For Your Health
        </h2>
      </div>

      {/* Services Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px"
      }}>
        {[
          {
            title: "General Consultation",
            desc: "Comprehensive care for fever, cold, infections and general health concerns"
          },
          {
            title: "Chronic Disease Management",
            desc: "Expert care for diabetes, hypertension, thyroid disorders and asthma"
          },
          {
            title: "Preventive Health Checkups",
            desc: "Annual checkups, blood tests, ECG, BP monitoring and lifestyle assessment"
          },
          {
            title: "Gastrointestinal Care",
            desc: "Treatment for acidity, constipation, IBS, indigestion and abdominal pain"
          },
          {
            title: "Respiratory Care",
            desc: "Treatment for asthma, bronchitis, COPD, allergic cough and respiratory infections"
          },
          {
            title: "Geriatric Care",
            desc: "Specialized care for elderly patients, managing age-related health concerns"
          },
          {
            title: "Lifestyle Counseling",
            desc: "Nutrition and fitness plans to improve overall well-being and prevent disease"
          },
          {
            title: "Family Medicine",
            desc: "Comprehensive healthcare for your entire family across all life stages"
          }
        ].map((service, index) => (
          <div key={index} style={{
            border: "1px solid #eee",
            padding: "20px",
            borderRadius: "4px",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <h4 style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "10px" }}>{service.title}</h4>
            <p style={{ fontSize: "13px", color: "#444", marginBottom: "10px" }}>{service.desc}</p>
            <button
              style={{
                fontSize: "13px",
                color: "#333",
                textDecoration: "none",
                fontWeight: "bold",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                alignSelf: "flex-start"
              }}
              onClick={() => navigate(`/ServiceDetail/${index}`)}
            >
              MORE →
            </button>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
        <Review />

      {/* Appointment CTA Section */}
      <div style={{
        height:'35vh',
        background: `url(${backservice}) no-repeat center center`,
        color: "white",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        <div style={{ flex: "1", minWidth: "200px", paddingLeft: "150px" }}>
          <h2 style={{ fontSize: "32px" }}>
            <span style={{ fontWeight: "bold" }}>Book An</span> Appointment
          </h2>
          <p style={{ fontSize: "13px", marginTop: "10px" }}>
            We provide a dedicated support 24/7 for any your question
          </p>
        </div>
        <div>
          <a href="/contact" style={{
            backgroundColor: "white",
            color: "#8B0000",
            padding: "20px 30px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px",
            marginRight: "200px"
          }}>
            REQUEST A CONSULTATION
          </a>
        </div>
      </div>

    </div>
  );
};

export default Services;
