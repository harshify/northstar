import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Certifications from '../components/Certifications';
import Breadcrumb from '../components/Breadcrumb';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ padding: '4rem 4%' }}>
        <Breadcrumb />
        <div style={{ marginBottom: '1.5rem' }} />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-primary)', marginBottom: '2rem' }}
        >
          About North Star
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.8, marginBottom: '4rem' }}
        >
          Established in 2005, North Star Lifts & Escalators Pvt. Ltd. is a premier manufacturer and installer of vertical mobility solutions in India. Through our indigenous manufacturing facility, we control the entire lifecycle of our elevators - guaranteeing rapid installation, rigorous safety testing, and proactive maintenance.
        </motion.p>
      </div>
      <Certifications />
    </main>
  );
};

export default About;
