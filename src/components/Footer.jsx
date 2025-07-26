import React, { useState } from 'react';
import logo from '../assets/logo.png';
import what from '../assets/what.png';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = (key) => ({
    color: hoveredLink === key ? '#000' : '#555',
    textDecoration: 'none',
    display: 'inline-block',
    width: '100%',
    padding: '6px 0',
  });

  const listItemStyle = {
    borderBottom: '1px solid #ccc',
    fontSize: '15px',
  };

  return (
    <footer
      style={{
        backgroundColor: '#fff',
        fontFamily: 'sans-serif',
        color: '#333',
        fontSize: '15px',
        borderTop: '1px solid #e0e0e0',
        paddingTop: '20px',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: '0 20px',
        }}
      >
        {/* Logo and Description */}
        <div style={{ flex: '1 1 300px', marginBottom: '40px' }}>
          <img
            src={logo}
            alt="Skanda Hospitals"
            style={{ height: '15vh', marginBottom: '24px' }}
          />
          <p style={{ lineHeight: '1.8', color: '#666' }}>
            Compassionate care, clinical excellence, and personalized treatment under one roof.
            Your health is our priority at the clinic of{' '}
            <strong>Dr. G. C. Prasanna Kumar</strong>, a trusted name in Internal Medicine.
          </p>
        </div>

        {/* SERVICES */}
        <div style={{ flex: '1 1 180px', marginBottom: '40px', paddingRight: '20px' }}>
          <h4 style={{ fontWeight: '700', marginBottom: '16px' }}>SERVICES</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
            {[
              { text: 'General Consultation', href: '/serviceDetail/0' },
              { text: 'Chronic Disease Management', href: '/serviceDetail/1' },
              { text: 'Preventive Health Checkups', href: '/serviceDetail/2' },
              { text: 'Gastrointestinal Care', href: '/serviceDetail/3' },
              { text: 'Respiratory Care', href: '/serviceDetail/4' },
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <a
                  href={item.href}
                  style={linkStyle(`service-${index}`)}
                  onMouseEnter={() => setHoveredLink(`service-${index}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  » {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* PAGES */}
        <div style={{ flex: '1 1 180px', marginBottom: '40px', paddingRight: '20px' }}>
          <h4 style={{ fontWeight: '700', marginBottom: '16px' }}>PAGES</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
            {[
              { text: 'Home', href: '/' },
              { text: 'Services', href: '/service' },
              { text: 'Blogs', href: '/blogs' },
              { text: 'About', href: '/about' },
              { text: 'Contact', href: '/contact' },
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <a
                  href={item.href}
                  style={linkStyle(`page-${index}`)}
                  onMouseEnter={() => setHoveredLink(`page-${index}`)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  » {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT (Styled Like Others) */}
        <div style={{ flex: '1 1 260px', marginBottom: '40px' }}>
          <h4 style={{ fontWeight: '700', marginBottom: '16px' }}>CONTACT</h4>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
            <li style={listItemStyle}>
              <span style={{ color: '#555' }}>
                📍 Skanda Hospitals, Raghavendra Colony,
                <br /> SeriLingampally, Kondapur, Hyderabad.
              </span>
            </li>
            <li style={listItemStyle}>
              <a
                href="mailto:skandaclinicshyderabad@gmail.com"
                style={linkStyle('email')}
                onMouseEnter={() => setHoveredLink('email')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                ✉️ skandaclinicshyderabad@gmail.com
              </a>
            </li>
            <li style={listItemStyle}>
              <a
                href="tel:+919533210900"
                style={linkStyle('phone')}
                onMouseEnter={() => setHoveredLink('phone')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                📞 +91 9533210900
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Separator */}
      <div style={{ borderTop: '1px solid #eee', margin: '0 40px' }}></div>

      {/* Bottom Info */}
      <div
        style={{
          textAlign: 'center',
          fontSize: '13px',
          color: '#888',
          padding: '20px 40px',
        }}
      >
        © 2025 <strong style={{ color: '#000' }}>DESIGN</strong> & Developed ❤️ by{' '}
        <strong style={{ color: '#000' }}>vmedianadvertising</strong>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919533210900"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          width: '65px',
          height: '65px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          color: '#fff',
          fontSize: '28px',
          textDecoration: 'none',
          zIndex: 9999,
        }}
      >
        <img style={{ width: '50px', height: '50px' }}
          src={what}
          alt="WhatsApp" />
      </a>
    </footer>
  );
}
