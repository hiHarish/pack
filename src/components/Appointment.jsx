import React, { useState } from 'react';
import axios from 'axios';

const AppointmentCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://pack1.onrender.com/send-appointment", formData);
      alert("Appointment request sent!");
      setFormData({ name: '', email: '', phone: '', date: '', message: '' });
    } catch (err) {
      console.error(err);
      alert("Failed to send appointment.");
    }
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '40px',
        border: '1px solid #7a1212',
        borderRadius: '4px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        backgroundColor: '#fff',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ color: '#999', margin: 0, fontSize: '18px', paddingTop:'5vh' }}>WE ALWAYS READY TO HELP YOU</p>
        <h2 style={{ margin: '10px 0', fontSize: '46px', fontWeight: '400' }}>
          <span style={{ color: '#8e1b1b', fontWeight: '700' }}>Book An</span> Appointment
        </h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'space-between',
          padding:'5vh 5vw'
        }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name..."
          required
          style={{
            flex: '1 1 22%',
            padding: '10px 0',
            border: 'none',
            borderBottom: '1px solid #ccc',
            outline: 'none',
            color: '#555',
            fontSize: '20px',
          }}
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="demo@yourmail.com"
          required
          style={{
            flex: '1 1 22%',
            padding: '10px 0',
            border: 'none',
            borderBottom: '1px solid #ccc',
            outline: 'none',
            color: '#555',
            fontSize: '18px',
          }}
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          style={{
            flex: '1 1 22%',
            padding: '10px 0',
            border: 'none',
            borderBottom: '1px solid #ccc',
            outline: 'none',
            color: '#555',
            fontSize: '18px',
          }}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]}
          style={{
            flex: '1 1 22%',
            padding: '10px 0',
            border: 'none',
            borderBottom: '1px solid #ccc',
            outline: 'none',
            color: '#000',
            fontSize: '18px',
          }}
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          style={{
            width: '100%',
            marginTop: '20px',
            padding: '10px 0',
            border: 'none',
            borderBottom: '1px solid #ccc',
            outline: 'none',
            resize: 'none',
            color: '#555',
            fontSize: '20px',
            height: '80px',
          }}
        ></textarea>

        <div style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#8e1b1b',
              color: '#fff',
              padding: '16px 40px',
              border: 'none',
              borderRadius: '2px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              letterSpacing: '1px',
            }}
          >
            MAKE AN APPOINTMENT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentCard;
