import React from 'react';
import doc from '../assets/prkumar.png'

const Doctor = () => {
  return (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        padding: '60px 20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Subtitle */}
      <p style={{ color: '#777', fontSize: '14px', marginBottom: '10px' }}>
        MEET OUR DOCTOR
      </p>

      {/* Title */}
      <h2 style={{ fontSize: '50px', marginBottom: '40px', fontWeight: '400' }}>
        <span style={{ color: '#8e1b1b', fontWeight: '700' }}>Professional &</span>{' '}
        Enthusiastic
      </h2>

      {/* Card */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '8px',
          padding: '40px 20px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Doctor Image */}
        <img
          src={doc} // Replace this with your local or imported image
          alt="Dr. G. C. Prasanna Kumar"
          style={{
            width: '400px',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        />

        {/* Doctor Name */}
        <h3 style={{ margin: '10px 0', fontSize: '30px', fontWeight: '600' }}>
          Dr. G. C. Prasanna Kumar
        </h3>

        {/* Description */}
        <p
          style={{
            color: '#666',
            fontSize: '20px',
            maxWidth: '800px',
            margin: '0 auto 30px',
          }}
        >
          MBBS, MD (Internal Medicine) | Known for compassionate care and clinical
          excellence.
        </p>

        {/* Button */}
        <a href='/about'
          style={{
            backgroundColor: '#8b0000',
            color: '#fff',
            padding: '10px 24px',
            fontSize: '14px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Doctor;
