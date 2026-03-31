import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import liftsData   from '../data/liftsData';
import heroImg     from '../assets/lift-hero-bg.png';

/* ── Helpers ────────────────────────────────────────────── */
const TABS = ['Features', 'Technical Specs', 'Applications', 'Gallery'];

/* ── Sub-components ─────────────────────────────────────── */
const FeatureCard = ({ icon, title, desc }) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.CheckCircle;
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '1.2rem',
      padding: '2.5rem 2rem', backgroundColor: 'var(--bg-secondary)',
      borderRadius: '12px', border: '1px solid var(--border-color, #e2e8f0)',
      borderLeft: '4px solid var(--accent-secondary)',
      transition: 'all 0.3s ease',
      height: '100%',
    }}
      onMouseEnter={e => { 
        e.currentTarget.style.transform = 'translateY(-6px)'; 
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'; 
        e.currentTarget.style.borderColor = 'var(--accent-secondary)'; 
      }}
      onMouseLeave={e => { 
        e.currentTarget.style.transform = 'translateY(0)'; 
        e.currentTarget.style.boxShadow = 'none'; 
        e.currentTarget.style.borderColor = 'var(--border-color, #e2e8f0)'; 
      }}
    >
      <div style={{
        width: '56px', height: '56px', borderRadius: '12px',
        backgroundColor: 'rgba(242,92,5,0.08)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)'
      }}>
        <IconComponent size={28} strokeWidth={2} />
      </div>
      <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk', margin: 0 }}>{title}</h4>
      <ul style={{ 
        margin: 0, paddingLeft: '1.25rem', color: 'var(--text-secondary)', 
        fontSize: '0.98rem', lineHeight: 1.7 
      }}>
        <li>{desc}</li>
      </ul>
    </div>
  );
};

const SpecRow = ({ param, value, isLast }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    padding: '1rem 0', borderBottom: isLast ? 'none' : '1px solid var(--border-color, #e2e8f0)',
    gap: '1rem',
  }}>
    <span style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.92rem' }}>{param}</span>
    <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{value}</span>
  </div>
);

/* ── Main Page ───────────────────────────────────────────── */
const ServiceDetail = () => {
  const { id }             = useParams();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const lift = liftsData[id];

  // Fallback for unknown slugs
  if (!lift) {
    const formattedTitle = id
      ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      : 'Lift';
    return (
      <main style={{ paddingTop: '120px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ padding: '2rem 4% 4rem' }}>
          <Breadcrumb />
          <h1 style={{ marginTop: '2rem', fontSize: '2.5rem', color: 'var(--text-primary)' }}>{formattedTitle}</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Detailed page coming soon. Contact us for specifications.</p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>Get a Quote</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>

      {/* ── Hero Section ─────────────────────────────── */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '480px',
        background: '#0f172a',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}>
        {/* Background image */}
        <img
          src={heroImg}
          alt={lift.title}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.28,
          }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(15,23,42,0.95) 40%, rgba(15,23,42,0.4) 100%)',
        }} />

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '140px 4% 5rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 500px', maxWidth: '700px' }}>
            <Breadcrumb />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginTop: '2rem' }}
            >
              <h1 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                color: '#ffffff', fontFamily: 'Space Grotesk',
                fontWeight: 700, lineHeight: 1.15, marginBottom: '1rem',
              }}>
                {lift.title}
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                {lift.tagline}
              </p>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '2.5rem' }}>
                {lift.summary}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact"
                  className="btn btn-primary"
                  style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}
                >
                  Get a Quote →
                </Link>
                <Link to="/solutions"
                  className="btn"
                  style={{
                    padding: '0.875rem 2rem', fontSize: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    color: '#fff', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'}
                >
                  ← All Lifts
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              flex: '1 1 400px', width: '100%', maxWidth: '600px', aspectRatio: '16/9', 
              borderRadius: '12px', overflow: 'hidden', 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', 
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: '#000'
            }}
          >
            {lift.videoId ? (
              <iframe 
                width="100%" height="100%" 
                src={`https://www.youtube.com/embed/${lift.videoId}?autoplay=1&mute=1&loop=1&playlist=${lift.videoId}`} 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen style={{ display: 'block' }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)' }}>
                No Video Available
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Tab Navigation ───────────────────────────── */}
      <div style={{
        position: 'sticky', top: '72px', zIndex: 100,
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '2px solid var(--border-color, #e2e8f0)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        <div className="container" style={{ padding: '0 4%', display: 'flex', gap: '0' }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                padding: '1.2rem 1.75rem',
                fontWeight: 700,
                fontSize: '0.92rem',
                fontFamily: 'inherit',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                color: activeTab === i ? 'var(--accent-secondary)' : 'var(--text-secondary)',
                borderBottom: activeTab === i ? '2px solid var(--accent-secondary)' : '2px solid transparent',
                marginBottom: '-2px',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ──────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >

          {/* TAB 0 — Features */}
          {activeTab === 0 && (
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div className="container" style={{ padding: '0 4%' }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}>
                    Key Features
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
                    Engineering excellence built into every system.
                  </p>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}>
                  {lift.features.map((f, i) => (
                    <FeatureCard key={i} {...f} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* TAB 1 — Technical Specs */}
          {activeTab === 1 && (
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div className="container" style={{ padding: '0 4%' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    Technical Specifications
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                    All specifications are indicative. Contact us for precise engineering parameters for your project.
                  </p>
                  <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color, #e2e8f0)',
                    overflow: 'hidden',
                    padding: '0 2rem',
                  }}>
                    {lift.specs.map((s, i) => (
                      <SpecRow key={i} {...s} isLast={i === lift.specs.length - 1} />
                    ))}
                  </div>
                  <div style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', backgroundColor: 'rgba(242,92,5,0.07)', borderRadius: '8px', borderLeft: '4px solid var(--accent-secondary)' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Note:</strong> Specifications may vary based on building requirements, shaft dimensions, and local codes. Our engineers will prepare a full technical proposal after a site assessment.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* TAB 2 — Applications */}
          {activeTab === 2 && (
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div className="container" style={{ padding: '0 4%' }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}>
                    Ideal Applications
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
                    Where {lift.title.toLowerCase()} deliver maximum value.
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                  {lift.applications.map((app, i) => (
                    <div key={i} style={{
                      padding: '1.5rem 2rem',
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: '12px',
                      border: '1px solid var(--border-color, #e2e8f0)',
                      borderLeft: '4px solid var(--accent-secondary)',
                      fontSize: '1.05rem', fontWeight: 600,
                      color: 'var(--text-primary)',
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.06)';
                      e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--border-color, #e2e8f0)';
                    }}
                    >
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '50%',
                        backgroundColor: 'rgba(242,92,5,0.1)', display: 'flex', flexShrink: 0,
                        alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)'
                      }}>
                        <LucideIcons.Building size={18} strokeWidth={2.5} />
                      </div>
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + "-gallery"}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {/* TAB 3 — Gallery */}
          {activeTab === 3 && (
            <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div className="container" style={{ padding: '0 4%' }}>
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}>
                    Installation Gallery
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
                    Visualizing excellence in {lift.title.toLowerCase()} installations.
                  </p>
                </div>
                {lift.gallery && lift.gallery.length > 0 ? (
                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem',
                  }}>
                    {lift.gallery.map((imgSrc, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        style={{ 
                          borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', 
                          border: '1px solid var(--border-color, #e2e8f0)',
                          backgroundColor: 'var(--bg-secondary)', cursor: 'pointer',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                        }}
                        whileHover={{ scale: 1.02, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
                      >
                        <img src={imgSrc} alt={`${lift.title} instance ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
                    <p>Contact us for detailed project photos.</p>
                  </div>
                )}
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>

    </main>
  );
};

export default ServiceDetail;
