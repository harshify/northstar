import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import passengerImg from '../assets/passenger-elevator.png';
import homeImg from '../assets/home-elevator.png';
import capsuleImg from '../assets/capsule-elevator.png';
import freightImg from '../assets/freight-elevator.png';

const liftTypes = [
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

const LiftSolutions = () => {
  return (
    <section id="lift-solutions" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Header */}
        <div style={{
          marginBottom: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <span style={{
              color: 'var(--accent-secondary)', fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem'
            }}>
              Our Solutions
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--text-primary)', margin: '0.3rem 0 0.5rem' }}>
              Engineered Lift Solutions
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0 }}>
              Specialized vertical transport systems for every architectural requirement.
            </p>
          </div>
          <Link to="/solutions" className="btn-split dark" style={{ padding: '4px 4px 4px 20px', borderRadius: '4px 4px 16px 4px' }}>
            <span className="text" style={{ fontSize: '0.85rem' }}>View All</span>
            <span className="icon" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>→</span>
          </Link>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
          }}
          style={{ paddingBottom: '50px' }}
        >
          {liftTypes.map((lift, idx) => (
            <SwiperSlide key={idx}>
              <Link
                to={`/solutions/${lift.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                style={{
                  position: 'relative',
                  height: '420px',
                  overflow: 'hidden',
                  display: 'block',
                  textDecoration: 'none',
                  borderRadius: '4px',
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
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* White label overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '18px',
                  left: '18px',
                  backgroundColor: 'white',
                  padding: '10px 18px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
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
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Swiper dot & arrow overrides */}
      <style>{`
        .swiper-pagination-bullet {
          background: rgba(0,0,0,0.25);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: var(--accent-secondary);
          width: 24px;
          border-radius: 4px;
          transition: width 0.3s ease;
        }
        .swiper-button-next,
        .swiper-button-prev {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: white;
          border: 1px solid rgba(0,0,0,0.12);
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          color: var(--text-primary) !important;
          top: calc(50% - 25px);
          transition: all 0.2s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: var(--accent-secondary);
          color: white !important;
          border-color: var(--accent-secondary);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 14px !important;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};

export default LiftSolutions;
