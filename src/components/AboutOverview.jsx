import React from 'react';
import { Link } from 'react-router-dom';

const AboutOverview = () => {
  return (
    <section id="about-us" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem', textAlign: 'center' }}>
          <div className="badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 1rem',
            backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent-secondary)',
            fontSize: '0.85rem', fontWeight: 700, borderRadius: '50px', marginBottom: '1.5rem'
          }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-secondary)' }}></span>
            COMPANY OVERVIEW
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', maxWidth: '800px' }}>
            Building the Backbone of Vertical Mobility Since 2005.
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.7 }}>
            North Star Lifts stands at the forefront of elevator engineering. We design, manufacture, and install premium vertical transportation systems perfectly tailored to industrial, commercial, and residential architectures.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <div style={{ order: 1 }}>
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="North Star Engineering Team" 
              style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
          
          <div style={{ order: 2 }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Why Choose North Star?</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>In-House Manufacturing</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Complete control over material quality and precision engineering from our dedicated 50,000 sq.ft facility.</p>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Certified Installers</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Our field teams undergo rigorous safety protocols to ensure flawless commissioning on every project.</p>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>24/7 Maintenance Support</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Zero downtime guarantee with our proactive Annual Maintenance Contracts and rapid response fleet.</p>
              </div>
            </div>
            
            <Link to="/contact" className="btn-split" style={{ marginTop: '2.5rem' }}>
              <span className="text">Verify Our Certifications</span>
              <span className="icon">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
