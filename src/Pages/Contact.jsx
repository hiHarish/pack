import React from "react";
import Appointment from '../components/Appointment';
import MapSection from '../components/MapSection';

const Contact = () => {
  return (
    <>
    <div
      style={{
        backgroundColor: "#f4f6f8",
        padding: "40px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "40px",
          maxWidth: "1100px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side - Locations */}
        <div style={{ flex: "1", minWidth: "300px", marginRight: "20px" }}>
          {/* Location 1 */}
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ color: "#8B0000", marginBottom: "5px" }}>📍 Kondapur</h3>
            <p style={{ margin: "5px 0" }}>
              Skanda Hospitals, Raghavendra Colony,
              <br />
              Seri Lingampally, Kondapur, Hyderabad.
            </p>
            <p style={{ margin: "5px 0" }}>📞 +91 95332 10900</p>
            <p style={{ margin: "5px 0" }}>📞 +91 90596 50900</p>
            <p style={{ color: "#A0522D", margin: "5px 0" }}>⏰ Timings: 8:30 AM – 12:00 AM</p>
          </div>

          {/* Location 2 */}
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ color: "#8B0000", marginBottom: "5px" }}>📍 Beeramguda</h3>
            <p style={{ margin: "5px 0" }}>
              Skanda Hospital and Rehabilitation Center,
              <br />
              Anand Nagar, Sri Ram Nagar Colony,
              <br />
              Beside Bachpan School, Beeramguda.
            </p>
            <p style={{ margin: "5px 0" }}>📞 +91 91546 47454</p>
            <p style={{ margin: "5px 0" }}>📞 +91 95332 10900</p>
            <p style={{ color: "#A0522D", margin: "5px 0" }}>⏰ Timings: 24/7</p>
          </div>

          {/* Location 3 */}
          <div
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <h3 style={{ color: "#8B0000", marginBottom: "5px" }}>📍 Nallagandla</h3>
            <p style={{ margin: "5px 0" }}>
              Plot 140-MIG, Nallagandla, HUDA,
              <br />
              Serilingampalle (M), Hyderabad,
              <br />
              Telangana 500019
            </p>
            <p style={{ margin: "5px 0" }}>📞 +91 95332 10900</p>
            <p style={{ color: "#A0522D", margin: "5px 0" }}>⏰ Timings: 24/7</p>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            backgroundColor: "#f9f9f9",
            padding: "30px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <h2 style={{ color: "#8B0000", marginBottom: "20px" }}>Contact Information</h2>
          <p style={{ marginBottom: "15px" }}>
            📧 <strong>Email</strong>
            <br />
            skandaclinicshyderabad@gmail.com
          </p>
          <p style={{ marginBottom: "15px" }}>
            ☎️ <strong>Emergency</strong>
            <br />
            +91 95332 10900
          </p>
          <p style={{ marginBottom: "15px" }}>
            📞 <strong>Appointments</strong>
            <br />
            +91 95332 10900
          </p>
          <p>
            🧑‍💼 <strong>Customer Support</strong>
            <br />
            +91 95332 10900
          </p>
        </div>
      </div>
    </div>
    <div><Appointment/></div>
    <div><MapSection/></div>
    </>
  );
};

export default Contact;
