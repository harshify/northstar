import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import passengerImg from '../assets/passenger-elevator.png';
import homeImg from '../assets/home-elevator.png';
import capsuleImg from '../assets/capsule-elevator.png';
import freightImg from '../assets/freight-elevator.png';

const allLifts = [
  { title: 'Passenger Lifts', useCase: 'Commercial & Multi-story Residential', img: passengerImg },
  { title: 'Machine Room Less (MRL) Lifts', useCase: 'Space-Saving for Modern Buildings', img: passengerImg },
  { title: 'Home / Duplex Lifts', useCase: 'Luxury & Residential Safety', img: homeImg },
  { title: 'Goods / Freight Lifts', useCase: 'Warehouses & Industrial Specifications', img: freightImg },
  { title: 'Hospital / Stretcher Elevators', useCase: 'Medical Centers & Clinics', img: passengerImg },
  { title: 'Hydraulic Lifts', useCase: 'Low Pit & Low-Rise Buildings', img: homeImg },
  { title: 'Service Lifts', useCase: 'Restaurants, Kitchens & Commercial Services', img: freightImg },
  { title: 'Car / Automobile Elevators', useCase: 'Automotive Dealerships & Parking', img: freightImg },
  { title: 'Capsule Lifts', useCase: 'Malls & Architectural Highlights', img: capsuleImg },
];

const LiftSolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>

      {/* Hero Banner */}
      <div style={{
        padding: '4rem 4% 5rem',
        textAlign: 'center',
        backgroundColor: 'var(--bg-tertiary)',
        borderBottom: '1px solid var(--border-color, rgba(0,0,0,0.06))'
      }}>
        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <Breadcrumb />
        </div>
        <span style={{
          color: 'var(--accent-secondary)', fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem'
        }}>
          Our Portfolio
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-primary)', margin: '0.75rem 0 1rem' }}>
          Our Vertical Solutions Directory
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore every lift solution we manufacture and install — built for every architectural requirement and structural capacity.
        </p>
      </div>

      {/* Static Grid of All Solutions */}
      <div className="container" style={{ padding: '5rem 4%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {allLifts.map((lift, idx) => (
            <Link
              to={`/solutions/${lift.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              key={idx}
              style={{
                position: 'relative',
                height: '380px',
                overflow: 'hidden',
                display: 'block',
                textDecoration: 'none',
                borderRadius: '6px',
              }}
            >
              <img
                src={lift.img}
                alt={lift.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
                  display: 'block'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />

              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)'
              }} />

              {/* Label */}
              <div style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                backgroundColor: 'white',
                padding: '10px 18px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                borderRadius: '2px'
              }}>
                <span style={{
                  color: 'var(--accent-secondary)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap'
                }}>
                  {lift.title}
                </span>
              </div>

              {/* Arrow badge on hover */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'var(--accent-secondary)',
                color: 'white',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = 1}
              >
                &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  );
};

export default LiftSolutionsPage;
