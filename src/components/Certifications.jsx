import React from 'react';

const certifications = [
  { name: 'ISO 9001:2015', desc: 'Quality Management System' },
  { name: 'CE Mark', desc: 'European Safety Standards' },
  { name: 'Make In India', desc: 'Indigenous Manufacturing' },
  { name: 'MSME Certified', desc: 'Govt. of India Enterprise' }
];

const Certifications = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '5rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
          Global Manufacturing Standards
        </h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
          {certifications.map((cert, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '220px' }}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%', border: '2px dashed var(--accent-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px',
                backgroundColor: 'var(--bg-secondary)', boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
              }}>
                <div style={{
                  width: '100%', height: '100%', backgroundColor: 'var(--bg-tertiary)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.1rem',
                  color: 'var(--text-primary)', textAlign: 'center'
                }}>
                  {cert.name.split(' ')[0]}
                </div>
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
