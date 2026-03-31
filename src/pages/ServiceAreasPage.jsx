import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { MapPin, Building2, Mountain, Factory, Route, Navigation, HeadphonesIcon, Clock, Wrench } from 'lucide-react';

const regions = [
  {
    city: 'Delhi NCR',
    desc: 'Our centralized hub for corporate operations, serving high-rises, malls, and luxury villas across Delhi, Noida, and Gurugram.',
    icon: Building2
  },
  {
    city: 'Dehradun',
    desc: 'A dedicated regional office tailored to the unique topography and architectural demands of Dehradun’s fastest-growing sectors.',
    icon: Mountain
  },
  {
    city: 'Haridwar',
    desc: 'Supporting massive industrial logistics, hospitality infrastructure, and heavy-duty freight operations with rapid response teams.',
    icon: Factory
  },
  {
    city: 'Western UP',
    desc: 'Extending our reliable installation and modern maintenance network through key commercial corridors in Western Uttar Pradesh.',
    icon: Route
  },
  {
    city: 'Uttarakhand Region',
    desc: 'Specialized technical teams equipped for challenging hill-station installations and reliable mobility across the broader state.',
    icon: Navigation
  }
];

const ServiceAreasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px', backgroundColor: 'var(--bg-secondary)', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container" style={{ padding: '0 4%' }}>
          <Breadcrumb />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginTop: '2rem' }}
          >
            <div className="badge" style={{ margin: '0 auto 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 1.25rem', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 700, borderRadius: '50px', border: '1px solid var(--border-color)' }}>
              <MapPin size={14} color="var(--accent-secondary)" />
              REGIONAL COVERAGE
            </div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'Space Grotesk', lineHeight: 1.1 }}>
              Local Expertise.<br />Global Engineering Standards.
            </h1>
            <p className="hero-subtitle" style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.6 }}>
              North Star Lifts operates a robust network of regional engineering hubs across North India. We guarantee rapid deployment, proactive maintenance, and localized support for every installation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ padding: '0 4%' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk' }}>Where We Operate</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-secondary)', margin: '1rem auto 0' }} />
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem',
          }}>
            {regions.map((region, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ 
                  borderRadius: '16px', padding: '2.5rem 2rem', 
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden'
                }}
                className="region-card"
              >
                <div className="card-bg-glow" style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(235,114,18,0.03) 0%, transparent 60%)', opacity: 0, transition: 'opacity 0.4s', zIndex: 0, pointerEvents: 'none' }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>
                    <region.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk', marginBottom: '1rem', fontWeight: 600 }}>
                    {region.city}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                    {region.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Local Matters Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ padding: '0 4%' }}>
          <div className="tonal-card" style={{ padding: '4rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(145deg, var(--bg-primary) 0%, var(--bg-tertiary) 100%)' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'Space Grotesk' }}>
                The North Star Advantage
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Elevators are complex mechanical systems that require prompt, localized attention. Our regional density ensures you are never too far from an authorized North Star technician.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
                Contact Local Office →
              </Link>
            </div>

            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--accent-secondary)', backgroundColor: 'rgba(235,114,18,0.1)', padding: '12px', borderRadius: '8px' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', margin: '0 0 4px', fontFamily: 'Space Grotesk' }}>Rapid Response Time</h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Guaranteed response windows for critical locations.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--accent-secondary)', backgroundColor: 'rgba(235,114,18,0.1)', padding: '12px', borderRadius: '8px' }}>
                  <HeadphonesIcon size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', margin: '0 0 4px', fontFamily: 'Space Grotesk' }}>Regional Support</h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Direct lines to your local engineering manager.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--accent-secondary)', backgroundColor: 'rgba(235,114,18,0.1)', padding: '12px', borderRadius: '8px' }}>
                  <Wrench size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', margin: '0 0 4px', fontFamily: 'Space Grotesk' }}>Localized Parts Inventory</h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>Spare parts stocked at regional centers to minimize downtime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .region-card:hover { border-color: rgba(235,114,18,0.3) !important; transform: translateY(-4px); transition: all 0.3s ease; }
        .region-card:hover .card-bg-glow { opacity: 1 !important; }
      `}</style>
    </div>
  );
};

export default ServiceAreasPage;
