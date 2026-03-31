import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/nsllogo.png';
import logo2Img from '../assets/nsllogo2.png';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-tertiary)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '5rem',
      paddingBottom: '2rem'
    }}>
      <div className="container">
        
        {/* Pre-footer CTA */}
        <div className="tonal-card" style={{ padding: '3rem', textAlign: 'center', marginBottom: '4rem', background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Ready to elevate your project?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Contact our team today for a comprehensive site evaluation and custom quotation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
            <a
              href="tel:+918979466131"
              className="btn"
              style={{
                backgroundColor: 'var(--text-primary)',
                color: '#fff',
                border: 'none',
                transition: 'background-color 0.3s, transform 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent-secondary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              📞 Call +91 89794 66131
            </a>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4rem',
          justifyContent: 'space-between',
          marginBottom: '4rem'
        }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <Link to="/" className="logo" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1.5rem', cursor: 'pointer' }}>
              <img 
                src={logoImg}
                alt="North Star Lifts & Escalators Pvt. Ltd." 
                style={{ maxHeight: '48px', objectFit: 'contain' }} 
              />
            </Link>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              End-to-end lift solutions encompassing state-of-the-art manufacturing, precision installation, and proactive maintenance.
            </p>
          </div>

          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk' }}>Solutions</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/solutions/passenger-lifts" style={{ color: 'var(--text-secondary)' }}>Passenger Lifts</Link></li>
              <li><Link to="/solutions/home-duplex-lifts" style={{ color: 'var(--text-secondary)' }}>Home/Villa Lifts</Link></li>
              <li><Link to="/solutions/machine-room-less-mrl-lifts" style={{ color: 'var(--text-secondary)' }}>MRL Elevators</Link></li>
              <li><Link to="/solutions/hospital-stretcher-elevators" style={{ color: 'var(--text-secondary)' }}>Hospital Lifts</Link></li>
              <li><Link to="/solutions/goods-freight-lifts" style={{ color: 'var(--text-secondary)' }}>Industrial Freight</Link></li>
              <li><Link to="/solutions" style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.5rem', display: 'inline-block' }}>View All Solutions →</Link></li>
            </ul>
          </div>

          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">About Us</Link></li>
              <li><Link to="/projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Our Projects</Link></li>
              <li><Link to="/clients" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Our Clients</Link></li>
              <li><Link to="/resources/service-areas" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Service Areas</Link></li>
              <li><Link to="/resources/blog-guides" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Blog & Guides</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="footer-link">Contact Support</Link></li>
            </ul>
          </div>

          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk' }}>Contact Us</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a href="mailto:northstarlift@rediffmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>northstarlift@rediffmail.com</a>
                </li>
                <li style={{ color: 'var(--text-secondary)', fontWeight: 600, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span>+91 89794 66131</span>
                  <span>+91 98971 39260</span>
                  <span>+91 79002 65555</span>
                  <span>+91 94120 05777</span>
                  <span>+91 93599 03586</span>
                </li>
                <li style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Head Office</li>
                <li style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>201-IInd Floor, Agarwal Tower,<br/>Dilshad Garden, Delhi - 110095</li>
                <li style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Area Offices</li>
                <li style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>Haridwar • Dehradun • Delhi NCR</li>
              </ul>
            </div>
            
            <img 
              src={logo2Img} 
              alt="Make in India" 
              style={{ maxHeight: '120px', objectFit: 'contain', opacity: 0.9, marginTop: '2rem' }} 
            />
          </div>

        </div>

        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            &copy; 2026 North Star Lifts & Escalators Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600, marginRight: '0.5rem', fontSize: '0.95rem' }}>Follow Us:</span>
            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color='var(--accent-secondary)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-secondary)'} aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>
            </a>
            <a href="https://www.instagram.com/northstarlifts/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color='var(--accent-secondary)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-secondary)'} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="4" width="16" height="16" rx="4"></rect><circle cx="12" cy="12" r="3"></circle><line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line></svg>
            </a>
            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color='var(--accent-secondary)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-secondary)'} aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><line x1="8" y1="11" x2="8" y2="16"></line><line x1="8" y1="8" x2="8" y2="8.01"></line><polyline points="12 16 12 11 16 11 16 16"></polyline><line x1="12" y1="16" x2="16" y2="16"></line></svg>
            </a>
            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color='var(--accent-secondary)'} onMouseLeave={e => e.currentTarget.style.color='var(--text-secondary)'} aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
