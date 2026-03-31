import React from 'react';

const reasons = [
  { title: 'In-House Manufacturing', desc: 'Direct cost control and rigorous QA/QC without relying on third-party aggregators.' },
  { title: '500+ Successful Installations', desc: 'A proven track record across demanding commercial and residential environments.' },
  { title: 'Certified Safety Protocols', desc: 'Compliance with stringent Indian and International elevator safety codes.' },
  { title: '24/7 Maintenance Support Command', desc: 'Dedicated rapid-response teams utilizing predictive maintenance analytics.' }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 400px' }}>
            <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>The North Star Advantage</span>
            <h2 style={{ fontSize: '3rem', margin: '1rem 0', color: 'var(--text-primary)' }}>Why Industry Leaders Trust Us</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              We eliminate the conventional friction in elevator procurement. By controlling the manufacturing, installation, and maintenance pipeline, we guarantee superior hardware reliability and aggressive lead times.
            </p>
            <button className="btn btn-primary">Schedule a Consultation</button>
          </div>

          <div style={{ flex: '1 1 500px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {reasons.map((r, i) => (
              <div key={i} className="tonal-card" style={{ padding: '2rem', borderLeft: `3px solid ${i % 2 === 0 ? 'var(--accent-secondary)' : 'var(--accent-primary)'}` }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{r.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{r.desc}</p>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
