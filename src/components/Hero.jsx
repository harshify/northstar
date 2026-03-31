import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/3623-172488375.mp4';

const Hero = () => {
  return (
    <section className="hero" style={{
      position: 'relative',
      paddingTop: '10rem',
      paddingBottom: '8rem',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src={heroVideo}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }}
      />

      {/* Gradient Overlay for text readability on left, full video visibility on right */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(253, 252, 248, 1) 0%, rgba(253, 252, 248, 0.85) 45%, rgba(253, 252, 248, 0) 75%)',
        zIndex: 2
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '650px' }}>
          
          <div className="badge animate-fade-in" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '0.5rem 1.25rem',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '2rem',
            borderRadius: '50px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: 'var(--accent-secondary)' }}></span>
            MANUFACTURING • INSTALLATION • COMMISSIONING • MAINTENANCE
          </div>
          
          <h1 className="animate-fade-in" style={{
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            lineHeight: 1.05,
            animationDelay: '0.1s'
          }}>
            End-to-end lift <br/>
            <span style={{ color: 'var(--accent-secondary)' }}>solutions.</span>
          </h1>
          
          <p className="animate-fade-in" style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '550px',
            animationDelay: '0.2s',
            lineHeight: 1.7
          }}>
            From lift installation to ongoing maintenance, we deliver safe, efficient, and hassle-free vertical mobility solutions for homes, businesses, and industrial projects.
          </p>
          
          <div className="hero-ctas animate-fade-in" style={{ display: 'flex', gap: '1rem', animationDelay: '0.3s' }}>
            <Link to="/contact" className="btn-split" style={{ fontSize: '1.05rem', padding: '8px 8px 8px 28px' }}>
              <span className="text">Request a Quote</span>
              <span className="icon" style={{ width: '48px', height: '48px' }}>→</span>
            </Link>
            <Link to="/about" className="btn-split dark" style={{ fontSize: '1.05rem', padding: '8px 8px 8px 28px' }}>
              <span className="text">Explore Our Capabilities</span>
              <span className="icon" style={{ width: '48px', height: '48px' }}>→</span>
            </Link>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div 
        onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.8rem',
          cursor: 'pointer',
          opacity: 0.8,
          transition: 'opacity 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
      >
        <span style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.75rem', 
          textTransform: 'uppercase', 
          letterSpacing: '2px', 
          fontWeight: 700 
        }}>
          Scroll to know more
        </span>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid var(--text-secondary)',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '6px'
        }}>
          <div className="scroll-wheel" style={{
            width: '4px',
            height: '8px',
            backgroundColor: 'var(--accent-secondary)',
            borderRadius: '2px',
            animation: 'scrollBouncing 2s infinite ease-in-out'
          }}></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
