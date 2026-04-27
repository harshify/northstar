import React from 'react';
import IMAGES from '../data/imageAssets';

const Certifications = () => {
  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management System', image: IMAGES.isoCertificate },
    { name: 'CE Mark', desc: 'European Safety Standards' },
    { name: 'Make In India', desc: 'Indigenous Manufacturing' },
    { name: 'MSME Certified', desc: 'Govt. of India Enterprise' }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '5rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
          Global Manufacturing Standards
        </h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '1rem', 
                width: '220px' 
              }}
            >
              <div style={{
                width: '100px', height: '100px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px',
                backgroundColor: 'var(--bg-secondary)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                overflow: 'hidden'
              }}
              >
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  <div style={{
                    width: '100%', height: '100%', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1rem',
                    color: 'var(--text-primary)', textAlign: 'center', padding: '5px'
                  }}>
                    {cert.name}
                  </div>
                )}
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.25rem', fontWeight: 700 }}>{cert.name}</h4>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{cert.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
