import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
      overflow: 'hidden',
      position: 'relative'
    }}>

      {/* Large decorative 404 background text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(180px, 30vw, 380px)',
        fontWeight: 900,
        color: 'rgba(0,0,0,0.03)',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        lineHeight: 1,
        letterSpacing: '-0.05em',
        pointerEvents: 'none'
      }}>
        404
      </div>

      {/* Decorative vertical line (elevator shaft) */}
      <div style={{
        position: 'absolute',
        left: '12%',
        top: 0,
        bottom: 0,
        width: '2px',
        background: 'linear-gradient(to bottom, transparent, var(--accent-secondary), transparent)',
        opacity: 0.25
      }} />
      <div style={{
        position: 'absolute',
        right: '12%',
        top: 0,
        bottom: 0,
        width: '2px',
        background: 'linear-gradient(to bottom, transparent, var(--accent-secondary), transparent)',
        opacity: 0.25
      }} />

      {/* Main content */}
      <div style={{
        textAlign: 'center',
        zIndex: 1,
        padding: '2rem',
        maxWidth: '640px'
      }}>

        {/* Elevator icon animation */}
        <div style={{
          fontSize: '4rem',
          marginBottom: '1.5rem',
          animation: 'float 3s ease-in-out infinite',
          display: 'inline-block'
        }}>
          🛗
        </div>

        {/* 404 badge */}
        <div style={{
          display: 'inline-block',
          padding: '0.4rem 1.2rem',
          backgroundColor: 'rgba(198, 60, 1, 0.1)',
          border: '1px solid var(--accent-secondary)',
          borderRadius: '100px',
          color: 'var(--accent-secondary)',
          fontWeight: 700,
          fontSize: '0.85rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '1.5rem'
        }}>
          Error 404
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          color: 'var(--text-primary)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '1rem'
        }}>
          Wrong Floor.
        </h1>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          maxWidth: '460px',
          margin: '0 auto 2.5rem'
        }}>
          Looks like this elevator doesn't stop here. The page you're looking for has moved, or never existed. Let us take you back to the ground floor.
        </p>

        {/* Countdown bar */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '0.75rem' }}>
            Returning to Home in <strong style={{ color: 'var(--accent-secondary)' }}>{count}s</strong>
          </p>
          <div style={{
            width: '200px',
            height: '3px',
            backgroundColor: 'rgba(0,0,0,0.08)',
            borderRadius: '2px',
            margin: '0 auto',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              backgroundColor: 'var(--accent-secondary)',
              borderRadius: '2px',
              width: `${(count / 10) * 100}%`,
              transition: 'width 1s linear'
            }} />
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-split dark" style={{ padding: '6px 6px 6px 24px', borderRadius: '4px 4px 18px 4px' }}>
            <span className="text">Back to Home</span>
            <span className="icon" style={{ width: '40px', height: '40px', fontSize: '1.1rem' }}>↑</span>
          </Link>
          <Link to="/contact" style={{
            padding: '0.85rem 1.75rem',
            border: '1.5px solid rgba(0,0,0,0.15)',
            borderRadius: '4px',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s'
          }}
          onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-secondary)'; e.currentTarget.style.color = 'var(--accent-secondary)'; }}
          onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          >
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div style={{ marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Or go directly to:
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Our Solutions', to: '/solutions' },
              { label: 'Projects', to: '/projects' },
              { label: 'About Us', to: '/about' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  color: 'var(--accent-secondary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'opacity 0.2s'
                }}
                onMouseOver={e => e.currentTarget.style.opacity = 0.7}
                onMouseOut={e => e.currentTarget.style.opacity = 1}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </main>
  );
};

export default NotFound;
