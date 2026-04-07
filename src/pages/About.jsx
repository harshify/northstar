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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ color: 'var(--text-secondary)', maxWidth: '900px', lineHeight: 1.8, marginBottom: '4rem' }}
        >
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            It all began in <strong>2006</strong> with a simple yet powerful vision: to redefine vertical mobility in India by engineering elevators that don't just move people, but move them with uncompromising safety, reliability, and grace. What started as a small team of passionate engineers has now blossomed into North Star Lifts & Escalators Pvt. Ltd., a premier manufacturer trusted by industry leaders across the nation.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            In our early days, we recognized a critical gap in the market. Many property developers and homeowners were struggling with delayed installations, opaque pricing, and foreign parts that took months to replace. We knew there had to be a better way - an indigenous, end-to-end approach that puts the customer first.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Today, operating from our state-of-the-art manufacturing facility, we control the entire lifecycle of our elevators. From the first structural blueprint to precision manufacturing, rigorous multi-point safety testing, and proactive 24/7 maintenance, we leave absolutely nothing to chance. We don't just assemble parts; we craft engineering solutions.
          </p>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600 }}>
            Every lift we install is a promise of quality, standing as the true North Star of the vertical transport industry.
          </p>
        </motion.div>
      </div>
      <Certifications />
    </main>
  );
};

export default About;
