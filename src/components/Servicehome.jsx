import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logoimg from "../assets/logoimg.png";

export default function Servicehome() {
  return (
    <section id="services" style={{ background: '#fff', padding: '0', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '40px 0', display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* Top Icons Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 25 }}>CONSULTATION</div>
                <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>For fever, infections, fatigue & more</div>
              </div>
              <img src={logo1} alt="Consultation Logo" style={{ width: 50, height: 50 }} />
            </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left' }}><div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 25 }}>CHRONIC CARE</div>
              <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>Diabetes, BP, Thyroid, Asthma</div>
            </div>
            <img src={logo2} alt="Chronic Care Logo" style={{ width: 50, height: 50 }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left' }}><div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 25 }}>Geriatric Health</div>
              <div style={{ fontSize: 13, color: '#555', marginTop: 4 }}>Elder care & age-related issues</div>
            </div>
            <img src={logo3} alt="Chronic Care Logo" style={{ width: 50, height: 50 }} />
            </div>
          </div>
        </div>

        {/* Main Content Row */}
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
          {/* Left: Features */}
          <div style={{ flex: 1, minWidth: 350 }}>
            <div style={{ color: '#888', fontSize: 13, letterSpacing: 1, marginBottom: 10 }}>WHY CHOOSE HOPE MEDICAL</div>
            <div style={{ fontWeight: 400, fontSize: 36, marginBottom: 30 }}>
              <span style={{ color: '#7e1f1f', fontWeight: 700 }}>The Best</span> For Your Health
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 32, color: '#7e1f1f' }}><img style={{ height:70,width:50}} src={logo4} alt="logo4"/></span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>PREVENTIVE CHECKUPS</div>
                  <div style={{ fontSize: 13, color: '#555' }}>Annual screenings, ECG, blood tests & health evaluations.</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 32, color: '#7e1f1f' }}><img style={{ height:70,width:50}} src={logo5} alt="logo"/></span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>EXPERIENCED PHYSICIAN</div>
                  <div style={{ fontSize: 13, color: '#555' }}>Over 35 years of trusted care in Internal Medicine.</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ fontSize: 32, color: '#7e1f1f' }}><img style={{ height:70,width:50}} src={logo6} alt="logo"/></span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>COMPREHENSIVE SERVICES</div>
                  <div style={{ fontSize: 13, color: '#555' }}>Respiratory, digestive, infections, chronic conditions & more.</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 32, color: '#7e1f1f' }}><img style={{ height:60,width:60}} src={logo7} alt="logo"/></span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>LIFESTYLE COUNSELING</div>
                  <div style={{ fontSize: 13, color: '#555' }}>Personalized diet, exercise & wellness plans.</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 32, color: '#7e1f1f' }}><img style={{ height:70,width:50}}src={logo8} alt="logo"/></span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>ADVANCED DIAGNOSTICS</div>
                  <div style={{ fontSize: 13, color: '#555' }}>Modern tools for precise health assessments.</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 32, color: '#7e1f1f' }}><img style={{ height:70,width:50}} src={logo3} alt="logo"/></span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>PATIENT-CENTERED CARE</div>
                  <div style={{ fontSize: 13, color: '#555' }}>Each patient gets individual attention and support.</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Doctor Image */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img
              src={logoimg}
              alt="Doctor with stethoscope"
              style={{
                maxWidth: '100%',
                maxHeight: 600,
                objectFit: 'cover',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}