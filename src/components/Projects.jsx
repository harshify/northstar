import React from 'react';
import { Link } from 'react-router-dom';
import projOfficeImg from '../assets/proj-office.png';
import projHospitalImg from '../assets/proj-hospital.png';
import projVillaImg from '../assets/proj-villa.png';
import projMallImg from '../assets/proj-mall.png';
import freightImg from '../assets/freight-elevator.png';
import passengerImg from '../assets/passenger-elevator.png';

const projectsList = [
  { img: projOfficeImg,   category: 'Commercial',  location: 'Uttaranchal University (UIT), Dehradun',              type: 'High-Speed Passenger Lifts' },
  { img: projHospitalImg, category: 'Healthcare',   location: 'Himalayan Institute Hospital Trust, Jolly Grant', type: 'Hospital Stretcher Lifts' },
  { img: projVillaImg,    category: 'Residential',  location: 'Deep Ganga Apartment, Sidcul, Haridwar',            type: 'Premium Residential Passenger Lifts' },
  { img: freightImg,      category: 'Industrial',   location: 'Automat Irrigation, Sidcul, Haridwar',          type: 'Heavy Goods / Industrial Lifts' },
  { img: projMallImg,     category: 'Commercial',   location: 'Dilli Haat Cottage Emporium, Delhi',               type: 'Panoramic Capsule Lift' },
  { img: passengerImg,    category: 'Residential',  location: 'K. K. Infraventure, Dehradun',           type: 'High-Speed Passenger Lifts' },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Featured Installations</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Trusted by top builders, hospitals, and property owners.</p>
          </div>
          <Link to="/projects" className="btn-split dark" style={{ padding: '4px 4px 4px 20px', borderRadius: '4px 4px 16px 4px' }}>
            <span className="text" style={{ fontSize: '0.9rem' }}>View All Projects</span>
            <span className="icon" style={{ width: '36px', height: '36px', fontSize: '1rem' }}>→</span>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
          {projectsList.map((proj, idx) => (
            <Link key={idx} to="/projects" className="tonal-card" style={{ overflow: 'hidden', display: 'block', textDecoration: 'none', color: 'inherit' }}>
              {/* Real project image */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={proj.img}
                  alt={proj.type}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)'
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(198, 60, 1, 0.1)', color: 'var(--accent-secondary)', fontSize: '0.75rem', fontWeight: 600, borderRadius: '4px', marginBottom: '1rem' }}>
                  {proj.category}
                </span>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{proj.type}</h4>
                <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <span>📍</span> {proj.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
