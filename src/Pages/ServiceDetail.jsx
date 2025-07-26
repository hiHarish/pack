// src/pages/ServiceDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import doc from '../assets/simg1.png';
import doc1 from '../assets/simg2.png';
import doc2 from '../assets/simg33.png';
import doc3 from '../assets/simg4.png';
import doc4 from '../assets/simg5.png';
import doc5 from '../assets/simg6.png';
import doc6 from '../assets/simg7.png';
import doc7 from '../assets/simg3.png';
import docpr from '../assets/prkumar.png';


const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const departments = [
    {
      name: 'General Consultation',
      content: {
        title: 'General Consultation',
        description: "Dr. G. C. Prasanna Kumar provides thorough diagnosis and treatment for common health concerns affecting patients of all ages. With decades of experience, he combines clinical expertise with compassionate care.",
        conditions: ['Fever, cold and viral infections',
                    'Headaches and migraines',
                    'Fatigue and weakness',
                    'Minor injuries and wound care',
                    'Skin conditions and allergies'],
        doctor: {
          name: 'Dr. G. C. Prasanna Kumar',
          qualification: 'MBBS, MD',
          bio: 'Experienced in general practice and internal medicine.',
          phone: '+91 9533129000',
          experience: '15+ Years',
          languages: 'English, Telugu, Hindi',
          image: docpr,
        },
        headerImage: doc,
      },
    },
    {
      name: 'Chronic Disease Management',
      content: {
        title: 'Chronic Disease Management',
        description: 'Specialized long-term management of chronic conditions to improve quality of life and prevent complications. Dr. Prasanna Kumar creates personalized treatment plans based on evidence-based medicine.',
        conditions: ['Diabetes Mellitus (Type 1 & 2)',
                      'Hypertension (High Blood Pressure)',
                      'Thyroid Disorders (Hypo/Hyperthyroidism)',
                      'Asthma and COPD',
                      'Cholesterol Management'],
        headerImage: doc1,
      },
    },
    {
      name: 'Preventive Health Checkups',
      content: {
        title: 'Preventive Health Checkups',
        description: 'Regular health screenings help detect potential issues early and maintain optimal wellness.',
        conditions: ['Complete blood work (CBC, Sugar, Cholesterol, etc.)',
                      'ECG and Cardiac Screening',
                      'Blood Pressure Monitoring',
                      'Liver and Kidney Function Tests',
                      'Lifestyle and Nutrition Assessment',
                      'Early detection leads to better outcomes and simpler treatments.'],
        headerImage: doc2,
      },
    },
    {
      name: 'Gastrointestinal Care',
      content: {
        title: 'Gastrointestinal Care',
        description: 'Digestive health is fundamental to overall well-being. Dr. Prasanna Kumar provides expert care for various gastrointestinal conditions.',
        conditions: ['Acidity and GERD',
'Constipation and IBS',
'Indigestion and Bloating',
'Abdominal Pain Evaluation',
'Food Intolerances', 
'We focus on both treatment and identifying root causes of digestive issues.'],
        headerImage: doc3,
      },
    },
    {
      name: 'Respiratory Care',
      content: {
        title: 'Respiratory Care',
        description: 'Comprehensive care for respiratory conditions affecting patients of all ages. ',
        conditions: ['Asthma Management',
                      'COPD Treatment',
                      'Allergic Rhinitis and Cough',
                      'Bronchitis Treatment',
                      'Pneumonia Management', 
                    'We focus on both acute treatment and long-term respiratory health improvement.'],
        headerImage: doc4,
      },
    },
    {
      name: 'Geriatric Care',
      content: {
        title: 'Geriatric Care',
        description: 'Compassionate healthcare tailored to the unique needs of senior patients.',
        conditions: ['Age-related disease management',
                        'Medication review and optimization',
                        'Mobility and fall prevention',
                        'Memory and cognitive assessment',
                        'Nutritional guidance for seniors',
                        'We focus on maintaining independence and quality of life for our elderly patients.'],
                                headerImage: doc5,
      },
    },
    {
      name: 'Lifestyle Counseling',
      content: {
        title: 'Lifestyle Counseling',
        description: 'Personalized guidance to help you make sustainable lifestyle changes for better health.',
        conditions: ['Weight management strategies',
                    'Diabetes prevention nutrition',
                    'Exercise and activity planning',
                    'Stress management techniques',
                    'Sleep improvement guidance',
                    'We create realistic, achievable plans tailored to your lifestyle and health goals.'],
                            headerImage: doc6,
      },
    },
    {
      name: 'Family Medicine',
      content: {
        title: 'Family Medicine',
        description: 'Dr. Prasanna Kumar provides continuous, comprehensive healthcare for individuals and families.',
        conditions: ['Pediatric care for children',
                      'Adult preventive care',
                      'Women health services',
                      'Geriatric care for seniors',
                      'Chronic disease management',
                      'We build long-term relationships with our patients, understanding their complete health history.'],
        headerImage: doc7,
      },
    },
  ];

  const selectedIdx = parseInt(id, 10);
  const selected = departments[selectedIdx]?.content || departments[0].content;

  return (
    <div style={{ display: 'flex', padding: '30px',paddingLeft:'10vw', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '25%', paddingRight: '20px' , }}>
        <h4 style={{ marginBottom: '10px' }}>DEPARTMENTS</h4>
        {departments.map((dept, idx) => (
          <button
            key={idx}
            onClick={() => navigate(`/ServiceDetail/${idx}`)}
            style={{
              fontSize: '16px',
              borderRadius: '5px',
              padding: '12px',
              background: idx === selectedIdx ? '#8B0000' : '#f2f2f2',
              color: idx === selectedIdx ? 'white' : '#333',
              border: 'none',
              borderBottom: '1px solid #ccc',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left',
              marginBottom: '5px'
            }}
          >
            {dept.name} &gt;
          </button>
          
        ))}

        {/* Work Hours */}
        <div style={{ background: '#8B0000', color: 'white', padding: '30px', marginTop: '30px', borderRadius: '5px' }}>
          <h4>WORK HOURS</h4>
          {['Monday..........','Tuesday.........','Wednesday...','Thursday.......','Friday............','Saturday.......','Sunday.........'].map(day => (
            <div key={day} style={{ margin: '5px 0', paddingBottom:'10px'}}>
              {day}8:30 AM – 12:00 AM
            </div>
          ))}
          <a href='/contact' style={{ marginTop: '15px', background: 'white', color: '#8B0000', border: 'none', padding: '10px', width: '100%', cursor: 'pointer' }}>
            REQUEST A CONSULTATION
          </a>
        </div>

        {/* Book Appointment */}
        <div style={{ padding: '15px', border: 'none', marginTop: '30px', borderRadius: '5px', backgroundColor:'#e7e5e5ff',textAlign: 'center' }}>
          <h4>BOOK AN APPOINTMENT</h4>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '5px' }}>
            <input type="text" placeholder="Name *" required style={{padding:'10px', borderRadius:'5px', border:'0px'}}/>
            <input type="email" placeholder="Email *" required style={{padding:'10px', borderRadius: '5px', border:'0px'}} />
            <input type="tel" placeholder="Phone *" required style={{padding:'10px', borderRadius: '5px', border:'0px'}} />
            <input type="date" required  min={new Date().toISOString().split("T")[0]} style={{padding:'10px', borderRadius: '5px', border:'0px'}} />
            <textarea  required placeholder=" Message *" rows="4" style={{borderRadius: '5px', border:'0px'}}/>
            <button type="submit" style={{ background: '#8B0000', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>BOOK NOW</button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ width: '75%' }}>
        <h1>{selected.title}</h1>
        <img
          src={selected.headerImage}
          alt={selected.title}
          style={{ width: '50vw', height: '40vh', marginBottom: '20px' }}
        />
        <div style={{ paddingRight:'12vw'}}><p style={{padding:'5px 10px'}}>{selected.description}</p>
        </div>
        {selected.conditions && (
          <>
            <h4 style={{paddingLeft:'10px'}}>Conditions We Commonly Treat:</h4>
            <ul style={{ paddingLeft: '30px', listStyleType: 'disc', marginTop: '10px' }}>
              {selected.conditions.map((cond, i) => (
                <li key={i}>{cond}</li>
              ))}
            </ul>
          </>
        )}
        {/* Department-specific extra content */}
        {selected.extra && (
          <div style={{ marginTop: '20px' }}>{selected.extra}</div>
        )}
        {/* Doctor Info (if present for this department) */}
        { (
          <>
            <hr style={{ margin: '30px 0' }} />
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{fontSize:'30px', paddingLeft:'1vw'}}>Dr. G. C. Prasanna Kumar</h2>
                <p style={{ paddingLeft:'1vw'}}><strong>MBBS, MD</strong></p>
                <br/>
                <div style={{padding:'1vw'}}><p>Dr. G. C. Prasanna Kumar is known for his thorough diagnosis, empathetic approach, and dedication to improving patients’ quality of life. With over 15 years of experience, he offers comprehensive care across chronic and general health conditions.</p>
                </div>
                <p style={{paddingLeft:'1vw'}}>Phone....................<strong>+91 9533129000</strong></p>
                <p style={{paddingLeft:'1vw'}}>Experience............<strong>15+ Years</strong></p>
                <p style={{paddingLeft:'1vw'}}>Languages.............<strong>English, Telugu, Hindi</strong></p>
                <a href="/about" style={{ color: '#8B0000', fontWeight: 'bold',paddingLeft:'1vw' }}>VIEW FULL PROFILE</a>
              </div>
              <img
                src= {docpr}
                alt='doctor'
                style={{ width: '30vw', borderRadius: '5px' }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
