import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedMetric = ({ target, suffix, prefix = "", duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const animation = animate(0, target, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      });
      return animation.stop;
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { 
      target: 2000, 
      suffix: '+', 
      label: 'INSTALLATIONS',
      sublabel: 'Across North-India and still expanding'
    },
    { 
      target: 300, 
      suffix: '+', 
      label: 'Happy Clients',
      sublabel: 'Trusted by businesses and homeowners'
    },
    { 
      target: 20, 
      suffix: '+', 
      label: 'YEARS EXP.',
      sublabel: 'Leading since 2006'
    },
    { 
      target: 24, 
      suffix: '/7', 
      label: 'SUPPORT',
      sublabel: 'Dedicated maintenance'
    }
  ];

  return (
    <section id="stats-bar" style={{ 
      position: 'relative', 
      zIndex: 20, 
      marginTop: '-4rem', // Overlaps Hero slightly for premium look
      marginBottom: '2rem'
    }}>
      <div className="container">
        <div style={{
          backgroundColor: '#ffffff',
          boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
          borderRadius: '12px',
          padding: '3rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          border: '1px solid rgba(0,0,0,0.03)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle accent background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            backgroundColor: 'var(--accent-secondary)'
          }}></div>

          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '0 1rem',
                borderRight: idx === stats.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)'
              }}
              className="stat-item"
            >
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                color: 'var(--accent-primary)',
                marginBottom: '0.5rem',
                fontFamily: "'Space Grotesk', sans-serif"
              }}>
                <AnimatedMetric target={stat.target} suffix={stat.suffix} />
              </div>
              <div style={{ 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                color: 'var(--text-primary)', 
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '0.25rem'
              }}>
                {stat.label}
              </div>
              <div style={{ 
                fontSize: '0.8rem', 
                color: 'var(--text-secondary)',
                fontWeight: 500
              }}>
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            padding-bottom: 2rem !important;
          }
          .stat-item:last-child {
            border-bottom: none;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
