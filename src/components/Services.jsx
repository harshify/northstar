import React from 'react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    title: 'Installation',
    desc: 'Precision fitting and alignment of comprehensive lift infrastructure. Executed by certified engineers ensuring absolute structural safety and compliance.',
    benefits: ['On-time execution', 'Rigorous safety testing', 'Seamless system integration'],
  },
  {
    title: 'Maintenance',
    desc: 'Annual Maintenance Contracts to guarantee zero-downtime performance. Proactive servicing to extend the lifespan of your elevators.',
    benefits: ['24/7 emergency response', 'Preventative parts replacement', 'Monthly inspection reports'],
  },
  {
    title: 'Repair & Overhaul',
    desc: 'Rapid diagnostics and repair of mechanical, electrical, and aesthetic components across all major lift brands and configurations.',
    benefits: ['OEM parts guarantee', 'Transparent pricing', 'Minimal operational disruption'],
  },
  {
    title: 'Modernization',
    desc: 'Upgrade aging vertical transport systems with state-of-the-art controllers, safety sensors, and premium cabin aesthetics without complete replacement.',
    benefits: ['Cost-effective upgrades', 'Enhanced energy efficiency', 'Compliance with modern codes'],
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Our Core Services</span>
          <h2 style={{ fontSize: '3rem', margin: '1rem 0', color: 'var(--text-primary)' }}>End-to-End Excellence</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            From the initial blueprint to decades of reliable operation, we manage the entire lifecycle of your vertical transport systems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {servicesList.map((svc, idx) => (
            <div key={idx} className="tonal-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{svc.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                {svc.desc}
              </p>
              
              <ul style={{ marginBottom: '2.5rem', flexGrow: 1 }}>
                {svc.benefits.map((benefit, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--accent-secondary)' }}>✓</span> {benefit}
                  </li>
                ))}
              </ul>
              
              <Link
                to={`/services/${svc.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="btn"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  backgroundColor: 'var(--text-primary)',
                  color: '#fff',
                  border: 'none',
                  transition: 'background-color 0.3s, transform 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent-secondary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                View Service Details
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
