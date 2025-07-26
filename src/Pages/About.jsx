import React from "react";
import doc from '../assets/prkumar.png'
import doc3 from '../assets/doc3.png'

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          height: "400px",
          backgroundImage: `url(${doc3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <h1
          style={{
            position: "relative",
            color: "#fff",
            fontSize: "48px",
            fontWeight: "bold",
            zIndex: 1,
          }}
        >
          About
        </h1>
      </div>

      {/* Content Section */}
      <div style={{ maxWidth: "1000px", margin: "auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "40px", fontWeight: "100", marginBottom: "24px" }}>
          Expert Internal Medicine Care by Dr. G.C. Prasanna Kumar
        </h2>

        {/* Services */}
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>
            OUR SERVICES
          </h1>
          <p style={{ marginBottom: "12px", fontSize: "18px" }}>
            Welcome to the official website of{" "}
            <strong>Dr. G.C. Prasanna Kumar (MBBS, MD - General Medicine)</strong>, Founder &
            Medical Director of Skanda Hospitals. With 15+ years of experience, Dr. Kumar
            specializes in internal medicine and chronic disease management with a strong
            emphasis on ethical and evidence-based care.
          </p>
          <p style={{ fontSize: "16px", color: "#555" }}>
            Our comprehensive healthcare services include: <em>Diabetes & Hypertension management</em>,{" "}
            <em>General & Chronic illness care</em>, <em>Cardiac & Respiratory Condition treatment</em>,{" "}
            <em>Infectious Diseases management</em>, and <em>Preventive Health Checkups</em>. We aim to deliver
            personalized, high-quality treatment in a compassionate environment.
          </p>
          <br/><br/>

          {/* Services Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              marginTop: "20px",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <div>GENERAL CONSULTATION</div>
            <div>RESPIRATORY CARE</div>
            <div>GENERAL CONSULTATION</div>
            <div>CHRONIC DISEASE MANAGEMENT</div>
            <div>GERIATRIC CARE</div>
            <div>CHRONIC DISEASE MANAGEMENT</div>
            <div>PREVENTIVE HEALTH CHECKUPS</div>
            <div>LIFESTYLE COUNSELING</div>
            <div>PREVENTIVE HEALTH CHECKUPS</div>
            <div>GASTROINTESTINAL CARE</div>
            <div>FAMILY MEDICINE</div>
            <div>GASTROINTESTINAL CARE</div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "12px" }}>
            <b>WHY CHOOSE DR. G.C. PRASANNA KUMAR?</b>
          </h3>
          <p style={{ marginBottom: "12px", fontSize: "16px" }}>
            With a distinguished background including MD from Osmania Medical College and
            fellowships in Diabetes, Cardiology, and Critical Care, Dr. Prasanna Kumar brings
            unmatched clinical excellence. As the founder of Skanda Hospitals, he ensures a
            patient-first approach, high clinical standards, and a commitment to holistic
            health outcomes.
          </p>
          <p style={{ fontSize: "14px", color: "#555" }}>
            He has served in various reputed institutions like Mythri Hospital, Vikram Hospital,
            and Prime Hospital, and led the JITO COVID-19 Centre. His strong leadership and
            extensive experience make him a trusted name in internal medicine.
          </p>
        </div>

        {/* Doctor Image */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <img
            src={doc}
            alt="Dr. G.C. Prasanna Kumar"
            style={{ width: "500px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
          />
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid #ccc",
            display: "flex",
            flexDirection: "row",
            gap: "40px",
            fontSize: "14px",
            color: "#444",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div style={{fontSize: "16px"}}>
            <h4 style={{ fontSize:'20px',fontWeight: "600", marginBottom: "4px" }}>MAIN CLINIC</h4>
            <p>Raghavendra Colony, Kondapur, Hyderabad</p>
            <p>+91-9532310900</p>
            <p>skandaclinicshyderabad@gmail.com</p>
          </div>
          <div style={{fontSize: "16px"}}>
            <h4 style={{ fontSize:'20px',fontWeight: "600", marginBottom: "4px" }}>CLINIC TIMINGS</h4>
            <p>Monday to Sunday: 8:30 AM – 12:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
