import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import IMAGES from '../data/imageAssets';

const AboutOverview = () => {
  const highlights = [
    { 
      title: 'Precision Engineering',
      desc: 'Complete control over material quality and precision engineering from our dedicated in-house plant.' 
    },
    { 
      title: 'Proven Track Record',
      desc: 'Successfully serving commercial, industrial, and residential segments across the country.' 
    },
    { 
      title: 'Unrivaled Expertise',
      desc: 'Two decades of delivering excellence and innovative vertical transportation solutions.' 
    },
    { 
      title: 'Round-the-Clock Care',
      desc: 'Zero downtime guarantee with our proactive Annual Maintenance Contracts and rapid response.' 
    }
  ];

  return (
    <section id="about-us" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem', textAlign: 'center' }}>
          <div className="badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 1rem',
            backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent-secondary)',
            fontSize: '0.85rem', fontWeight: 700, borderRadius: '50px', marginBottom: '1.5rem'
          }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-secondary)' }}></span>
            COMPANY OVERVIEW
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', maxWidth: '800px' }}>
            Building the Backbone of Vertical Mobility Since 2006.
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.7 }}>
            North Star Lifts stands at the forefront of elevator engineering, designing premium transportation systems tailored to the most ambitious architectural projects.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ position: 'relative' }}>
            <img 
              src={IMAGES.aboutOverview} 
              alt="North Star Engineering Team" 
              style={{ width: '100%', height: 'auto', minHeight: '550px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: '5.5rem', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '2rem' }}>
              Why Choose <span style={{ color: 'var(--accent-secondary)' }}>North Star?</span>
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              {highlights.map((item, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700, borderLeft: '3px solid var(--accent-secondary)', paddingLeft: '12px' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
