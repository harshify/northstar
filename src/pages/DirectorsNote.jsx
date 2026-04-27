import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';

const directors = [
  {
    name: "Mr. V.K. Singh",
    designation: "Chairman & Founder",
    message: "Welcome to North Star Lifts. Since our inception in 2006, our mission has been to provide safe, reliable, and innovative vertical transport solutions. We believe in engineering excellence and customer satisfaction above all else.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    name: "Mr. Sanjay Sharma",
    designation: "Managing Director",
    message: "At North Star, we don't just build elevators; we build trust. Our commitment to using high-quality materials and state-of-the-art technology ensures that every journey in our lifts is smooth and secure.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    name: "Mr. Rajesh Verma",
    designation: "Technical Director",
    message: "Innovation is at the heart of our technical department. We are constantly pushing the boundaries of what's possible in elevator technology, focusing on energy efficiency and predictive maintenance.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    name: "Ms. Anita Desai",
    designation: "Director of Operations",
    message: "Operational efficiency and safety are our top priorities. From manufacturing to installation and beyond, we ensure that every process is optimized for peak performance and absolute reliability.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    name: "Mr. Rahul Kapoor",
    designation: "Director of Business Development",
    message: "We are expanding our horizons and bringing North Star's excellence to more cities across India. Our goal is to be the preferred choice for vertical mobility in every segment of the market.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500"
  },
  {
    name: "Mr. Vikram Malhotra",
    designation: "Director of Quality Assurance",
    message: "Quality is non-negotiable at North Star. We adhere to the strictest international safety standards and perform rigorous testing on every component to guarantee the safety of our passengers.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500"
  }
];

const DirectorsNote = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ padding: '4rem 4%' }}>
        <Breadcrumb />
        <div style={{ marginBottom: '1.5rem' }} />
        
        <header style={{ marginBottom: '4rem' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: 'var(--accent-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}
          >
            Leadership Team
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-primary)', marginTop: '0.5rem' }}
          >
            Director's Note
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ maxWidth: '800px', fontSize: '1.2rem', color: 'var(--text-secondary)', marginTop: '1.5rem', lineHeight: 1.8 }}
          >
            Our leadership team is dedicated to setting new benchmarks in the vertical transportation industry. Hear from the visionaries behind North Star Lifts & Escalators.
          </motion.p>
        </header>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '3rem',
          marginTop: '4rem'
        }}>
          {directors.map((director, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="tonal-card"
              style={{ 
                overflow: 'hidden', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                backgroundColor: 'var(--bg-secondary)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ height: '400px', overflow: 'hidden' }}>
                <img 
                  src={director.image} 
                  alt={director.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{director.name}</h3>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>
                  {director.designation}
                </span>
                <div style={{ position: 'relative' }}>
                  <span style={{ fontSize: '3rem', color: 'var(--accent-secondary)', position: 'absolute', top: '-1rem', left: '-0.5rem', opacity: 0.1, pointerEvents: 'none' }}>“</span>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.05rem', fontStyle: 'italic' }}>
                    {director.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <section style={{ backgroundColor: 'var(--accent-primary)', padding: '6rem 0', color: '#fff', marginTop: '6rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', color: '#fff', marginBottom: '1.5rem' }}>Our Shared Philosophy</h2>
          <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9, lineHeight: 1.8 }}>
            "To be the true North Star of the vertical transport industry, guiding every building towards safer, smoother, and more efficient mobility solutions through unwavering commitment and engineering excellence."
          </p>
        </div>
      </section>
    </main>
  );
};

export default DirectorsNote;
