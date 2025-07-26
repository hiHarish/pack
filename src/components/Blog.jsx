import React from 'react';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';

const blogs = [
  {
    image: {blog1},
    title: 'Managing Blood Pressure Naturally: Tips That Work',
    date: 'June 2025',
    author: 'Dr. G. C. Prasanna Kumar',
  },
  {
    image: {blog2},
    title: 'When to See a Doctor for a Cough That Won’t Go Away',
    date: 'June 2025',
    author: 'Dr. G. C. Prasanna Kumar',
  },
  {
    image: {blog3},
    title: 'Diabetes-Friendly Foods for Indian Households',
    date: 'June 2025',
    author: 'Dr. G. C. Prasanna Kumar',
  },
];

export default function BlogPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px' }}>
      <h1 style={{ textAlign: 'center', color: '#8B0000', fontSize: '48px', fontWeight: 'bold' }}>
        Blogs
      </h1>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {blogs.map((blog, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
              paddingBottom: '20px',
              borderBottom: '1px solid #ccc',
            }}
          >
            <img
              src={blog.image}
              alt="Blog"
              style={{
                width: '150px',
                height: '100px',
                objectFit: 'cover',
                marginRight: '20px',
                borderRadius: '6px',
              }}
            />
            <div>
              <h2 style={{ margin: '0 0 10px 0', fontSize: '22px' }}>{blog.title}</h2>
              <p style={{ margin: 0, color: 'gray', fontSize: '14px' }}>
                {blog.date} by <span style={{ fontWeight: '500' }}>{blog.author}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
