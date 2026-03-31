import React from 'react';

const stats = [
  { label: 'Lightweight castings for Industrial equipment', value: '35%' },
  { label: 'Precision CNC milling for automotive components', value: '54%' },
  { label: 'Additive manufacturing for custom tooling', value: '50%' },
  { label: 'Automated assembly line optimization', value: '40%' },
  { label: 'Surface treatment innovation for corrosion resistance', value: '65%' }
];

const Results = () => {
  return (
    <section id="results" className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Real results from real projects</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              We don't just manufacture parts; we engineer performance improvements that directly impact your bottom line. Trusted by clients, proven by results.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
                <div><strong style={{ display: 'block' }}>Emily Carter</strong><span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Lead Engineer</span></div>
              </div>
              {/* Other clients listed in text */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent-secondary)' }}></div>
                <div><strong style={{ display: 'block' }}>Liam Thompson</strong><span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Operations Manager</span></div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{
                background: 'var(--bg-secondary)',
                padding: '1.5rem',
                borderRadius: '8px',
                borderLeft: `4px solid ${idx % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)'}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 500, maxWidth: '70%' }}>{stat.label}</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: idx % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)' }}>
                  +{stat.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;
