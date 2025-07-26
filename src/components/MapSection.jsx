import React from 'react';

export default function MapCard() {
  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: '50px auto',
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ margin: 0, fontSize: '24px', color: '#B22222' }}>
          📍 Skanda Hospitals 
        </h2>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#555' }}>
          Raghavendra Colony, Kondapur, Telangana 500084
        </p>
      </div>

      {/* Google Maps embed with explicit marker */}
      <iframe
        title="Skanda Hospitals Location"
        width="100%"
        height="600"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps?q=Skanda+Hospitals+-+Dr.+Prasanna+Kumar,+Raghavendra+Colony,+Kondapur,+Telangana+500084&output=embed"
        allowFullScreen
      ></iframe>
    </div>
  );
}
