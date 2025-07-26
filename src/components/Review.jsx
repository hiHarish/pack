import React, { useState } from 'react';
import review from '../assets/review.jpg'; // Assuming you have a review image

const reviews = [
  {
    text: '“I’ve been visiting Dr. Kumar for over 5 years. The care and attention to detail are unmatched.”',
    name: 'Amit R.',
    location: 'Hyderabad',
  },
  {
    text: '“Dr. Prasanna Kumar is kind, patient, and truly listens. I always feel heard and cared for.”',
    name: 'Ramya V.',
    location: 'Hyderabad',
  },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviews[index];

  return (
    <div
      style={{
        backgroundImage: `url(${review})`, // Change to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        textAlign: 'center',
        fontFamily: 'Georgia, serif',
        color: '#000',
        position: 'relative',
        minHeight: '500px',
      }}
    >
      <p style={{ fontSize: '14px', color: '#aaa', marginBottom: '5px' }}>TESTIMONIAL</p>

      <h2 style={{ fontSize: '40px', margin: '0 0 40px', fontWeight: '400' }}>
        <span style={{ color: '#8e1b1b', fontWeight: '700' }}>Trusted </span>From Clients
      </h2>

      <p
        style={{
          fontSize: '24px',
          lineHeight: '1.6',
          maxWidth: '900px',
          margin: '0 auto 40px',
          color: '#000',
        }}
      >
        {currentReview.text}
      </p>

      <div style={{ marginTop: '20px' }}>
        <p
          style={{
            fontWeight: 'bold',
            color: '#8e1b1b',
            fontSize: '16px',
            margin: 0,
          }}
        >
          {currentReview.name}
        </p>
        <p
          style={{
            fontSize: '12px',
            color: '#666',
            marginTop: '4px',
          }}
        >
          {currentReview.location}
        </p>
      </div>

      {/* Navigation Arrows */}
      <span
        style={{
          position: 'absolute',
          left: '30px',
          top: '50%',
          fontSize: '32px',
          cursor: 'pointer',
          userSelect: 'none',
          transform: 'translateY(-50%)',
        }}
        onClick={handlePrev}
      >
        &#8249;
      </span>
      <span
        style={{
          position: 'absolute',
          right: '30px',
          top: '50%',
          fontSize: '32px',
          cursor: 'pointer',
          userSelect: 'none',
          transform: 'translateY(-50%)',
        }}
        onClick={handleNext}
      >
        &#8250;
      </span>
    </div>
  );
};

export default ReviewSlider;
