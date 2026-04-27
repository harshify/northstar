import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const MaintenanceDepartment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ padding: '4rem 4%' }}>
        <Breadcrumb />
        <div style={{ marginBottom: '1.5rem' }} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem', alignItems: 'center' }}>
          <header>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: 'var(--accent-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}
            >
              Excellence in Service
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-primary)', marginTop: '0.5rem', marginBottom: '2rem' }}
            >
              Maintenance Department
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.8 }}
            >
              <p style={{ marginBottom: '1.5rem' }}>
                At North Star Lifts, we believe that the installation is just the beginning. Our Maintenance Department is dedicated to ensuring that every elevator we service operates with maximum reliability, safety, and efficiency.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                With a nationwide network of service centers and a team of expert engineers, we provide comprehensive maintenance solutions tailored to the unique needs of residential, commercial, and industrial buildings.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              style={{ marginTop: '3rem' }}
            >
              <Link to="/contact" className="btn-split">
                <span className="text">Request Maintenance Audit</span>
                <span className="icon">→</span>
              </Link>
            </motion.div>
          </header>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" 
              alt="Maintenance Engineers" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>
        </div>

        {/* Maintenance Team Section */}
        <section style={{ marginTop: '8rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Our Workforce</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', marginTop: '0.5rem' }}>Our Dedicated Maintenance Team</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '800px', margin: '1rem auto 0' }}>
              We have a solid manpower of <strong>100+ professionals</strong> working with us, ensuring that help is always just a call away.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { name: "Hridesh Razoriya", role: "Head of Maintenance", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=350" },
              { name: "Suresh Kumar", role: "Senior Service Engineer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=350" },
              { name: "Meera Reddy", role: "Quality Control Specialist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=350" },
              { name: "Deepak Singh", role: "Emergency Response Hub", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=350" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="tonal-card"
                style={{ overflow: 'hidden', textAlign: 'center', backgroundColor: 'var(--bg-secondary)' }}
              >
                <div style={{ height: '300px', overflow: 'hidden' }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{member.name}</h4>
                  <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <section style={{ backgroundColor: 'var(--bg-tertiary)', padding: '8rem 0', marginTop: '6rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Our Service Commitment</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  "Safety First: No compromise on passenger safety.",
                  "Reliability: Maximizing uptime through proactive care.",
                  "Transparency: Clear reporting and honest pricing.",
                  "Sustainability: Enhancing energy efficiency in every elevator.",
                  "Customer Focus: 24/7 availability for your peace of mind."
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-secondary)', fontWeight: 'bold' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', backgroundColor: 'var(--bg-secondary)', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Annual Maintenance Contract (AMC)</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Protect your investment and ensure long-term performance with our comprehensive AMC packages. We provide customized plans for residential complexes, hotels, hospitals, and corporate offices.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Get a Customized Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MaintenanceDepartment;
