import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import projOfficeImg from '../assets/proj-office.png';
import projHospitalImg from '../assets/proj-hospital.png';
import projVillaImg from '../assets/proj-villa.png';
import projMallImg from '../assets/proj-mall.png';
import freightImg from '../assets/freight-elevator.png';
import passengerImg from '../assets/passenger-elevator.png';
import solitare from "../assets/Solitaire.jpg"

const allProjects = [
  {
    img: solitare,
    location: 'Solitaire Hotel, Mussoorie',
    type: 'Premium Passenger Lifts',
    category: 'Hospitality',
    year: '2024',
    description: 'Elegant vertical mobility solutions tailored for the luxury Solitaire Hotel in Mussoorie, combining stunning design with reliable performance.'
  },
  {
    img: projOfficeImg,
    location: 'Uttaranchal University (UIT), Dehradun',
    type: 'High-Speed Passenger Lifts',
    category: 'Commercial',
    year: '2023',
    description: 'A major installation of 24 passenger lifts across the university campus, designed for high traffic volumes and maximum energy efficiency for students and faculty.'
  },
  {
    img: projHospitalImg,
    location: 'Himalayan Institute Hospital Trust, Jolly Grant',
    type: 'Hospital Stretcher Lifts',
    category: 'Healthcare',
    year: '2022',
    description: 'Installation of highly-reliable, wide-door stretcher lifts meeting Indian hospital safety standards, configured perfectly for rapid-response emergency access.'
  },
  {
    img: projVillaImg,
    location: 'Deep Ganga Apartment, Sidcul, Haridwar',
    type: 'Premium Residential Passenger Lifts',
    category: 'Residential',
    year: '2021',
    description: 'A massive deployment of 60 passenger elevators across sprawling residential towers, featuring smart dispatching, premium cabin finishes, and whisper-quiet operation.'
  },
  {
    img: freightImg,
    location: 'Automat Irrigation, Sidcul, Haridwar',
    type: 'Heavy Goods / Industrial Lifts',
    category: 'Industrial',
    year: '2023',
    description: 'Heavy-duty freight elevator installations consisting of 8 robust units for a large manufacturing and logistics facility, featuring reinforced cabins and automated safety stops.'
  },
  {
    img: projMallImg,
    location: 'Dilli Haat Cottage Emporium, Delhi',
    type: 'Panoramic Capsule Lift',
    category: 'Commercial',
    year: '2024',
    description: 'Panoramic glass capsule lift installed as a functional and architectural centrepiece, providing visitors with scenic vertical movement through the complex.'
  },
  {
    img: passengerImg,
    location: 'K. K. Infraventure, Dehradun',
    type: 'High-Speed Passenger Lifts',
    category: 'Residential',
    year: '2023',
    description: 'Installation of 20 high-speed passenger lifts forming the vertical backbone of this premium housing development, featuring smart monitoring systems.'
  },
  {
    img: projOfficeImg,
    location: 'High Court Nainital, Uttarakhand',
    type: 'Machine Room Less (MRL) Lifts',
    category: 'Commercial',
    year: '2022',
    description: 'Space-saving MRL elevators installed into the prominent judicial complex, maintaining architectural integrity while significantly modernizing accessibility.'
  },
  {
    img: projHospitalImg,
    location: 'Shanti Mukund Hospital, Delhi',
    type: 'Hospital & Service Lifts',
    category: 'Healthcare',
    year: '2021',
    description: 'Combined installation of 4 hospital-grade passenger and service lifts, enabling seamless, vibration-free movement of patients and medical equipment across floors.'
  },
  {
    img: projVillaImg,
    location: 'GMVN SKI RESORTS, Auli, Uttarakhand',
    type: 'Boutique Hospitality Lifts',
    category: 'Hospitality',
    year: '2022',
    description: 'Custom-designed bespoke guest elevators for the scenic high-altitude resort, engineered for extreme weather reliability with handcrafted cabin interiors.'
  },
];

const CATEGORIES = ['All', 'Commercial', 'Residential', 'Healthcare', 'Industrial', 'Hospitality'];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>

      {/* Hero Banner */}
      <div style={{
        padding: '4rem 4% 5rem',
        textAlign: 'center',
        backgroundColor: 'var(--bg-tertiary)',
        borderBottom: '1px solid rgba(0,0,0,0.06)'
      }}>
        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <Breadcrumb />
        </div>
        <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
          Our Work
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-primary)', margin: '0.75rem 0 1rem' }}>
          Featured Installations
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Trusted by top builders, hospitals, and property owners across India. Every installation reflects our commitment to safety, precision, and design.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/clients" className="btn btn-secondary" style={{ padding: '0.8rem 1.7rem', borderRadius: '50px', fontWeight: 600, border: '1px solid var(--accent-secondary)', color: 'var(--text-primary)' }}>
            View Our Major Client List (74+ Projects) →
          </Link>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{ padding: '2.5rem 4% 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '100px',
              border: activeCategory === cat ? 'none' : '1px solid rgba(0,0,0,0.12)',
              backgroundColor: activeCategory === cat ? 'var(--accent-secondary)' : 'white',
              color: activeCategory === cat ? 'white' : 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="container" style={{ padding: '3rem 4% 6rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {filtered.map((proj, idx) => (
            <div
              key={idx}
              className="tonal-card"
              style={{ overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => setExpanded(expanded === idx ? null : idx)}
            >
              {/* Project Image */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={proj.img}
                  alt={proj.type}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)'
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Category badge */}
                <span style={{
                  position: 'absolute', top: '14px', left: '14px',
                  backgroundColor: 'var(--accent-secondary)', color: 'white',
                  fontSize: '0.72rem', fontWeight: 700, padding: '4px 12px',
                  borderRadius: '100px', textTransform: 'uppercase', letterSpacing: '0.5px'
                }}>
                  {proj.category}
                </span>
                <span style={{
                  position: 'absolute', top: '14px', right: '14px',
                  backgroundColor: 'rgba(0,0,0,0.55)', color: 'white',
                  fontSize: '0.72rem', fontWeight: 600, padding: '4px 12px', borderRadius: '100px'
                }}>
                  {proj.year}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  {proj.type}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0' }}>
                  <span>📍</span> {proj.location}
                </p>

                {/* Expandable description */}
                {expanded === idx && (
                  <p style={{
                    marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem',
                    lineHeight: 1.7, borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem'
                  }}>
                    {proj.description}
                  </p>
                )}

                <div style={{
                  marginTop: '1rem', color: 'var(--accent-secondary)', fontWeight: 600,
                  fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem'
                }}>
                  {expanded === idx ? 'Hide details ↑' : 'View details ↓'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-secondary)' }}>
            No projects found in this category.
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Ready to start your project?
          </p>
          <Link to="/contact" className="btn-split" style={{ padding: '6px 6px 6px 28px', borderRadius: '4px 4px 20px 4px', display: 'inline-flex' }}>
            <span className="text">Get a Custom Quote</span>
            <span className="icon" style={{ width: '44px', height: '44px', fontSize: '1.2rem' }}>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
