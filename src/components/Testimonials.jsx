import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Facility Head, SkyHigh Residency",
    text: "Installing North Star elevators was the best decision for our high-rise. Their predictive maintenance has ensured zero downtime over the last 3 years. Truly remarkable reliability."
  },
  {
    name: "Dr. Priya Sharma",
    role: "Medical Director, Apollo Spectra",
    text: "Safety is non-negotiable in healthcare. North Star's stretcher lifts are incredibly smooth and stable, providing the precision transport required for critical patients."
  },
  {
    name: "Vikram Rathore",
    role: "Managing Director, Rathore Builders",
    text: "We have partnered with North Star for multiple luxury projects in Dehradun. Their ability to deliver custom machine-room-less solutions for tight spaces is unmatched."
  },
  {
    name: "Sneha Kulkarni",
    role: "Principal Architect, Studio S",
    text: "As an architect, I value design flexibility. North Star offers a standard of aesthetic customization that allows me to treat the elevator as a focal point of the building's lobby."
  },
  {
    name: "Rahul Kapoor",
    role: "Interior Designer",
    text: "The cabin finishes provided by North Star are world-class. From mirror-finish gold to textured glass designs, they offer the premium touch my clients demand."
  },
  {
    name: "Amitabh Mukherjee",
    role: "Chairman, Residents Welfare Assoc.",
    text: "Upgrading our old elevators was a complex task. North Star's modernization team handled everything with minimal disruption. The energy savings are already visible."
  },
  {
    name: "Sunita Agarwal",
    role: "General Manager, Global Mall",
    text: "Handling high weekend footfalls requires heavy-duty performance. Our capsule lifts from North Star are not just functional but have become a major visual attraction in the mall."
  },
  {
    name: "Sandeep Varma",
    role: "Chief Engineer, Hyatt Regency",
    text: "24/7 service availability is what sets them apart. Their response time to maintenance requests is the fastest in the industry, which is critical for the hospitality sector."
  },
  {
    name: "Ananya Iyer",
    role: "Smart Home Consultant",
    text: "The integration of smart controls and touchless technology in their latest models is impressive. It adds a layer of modern luxury that resonates with today's homeowners."
  },
  {
    name: "Zaid Sheikh",
    role: "General Contractor, BuildTech",
    text: "Reliable, transparent, and strictly on time. North Star is my go-to partner for vertical transport because they never overshoot budgets or project deadlines."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Social Proof</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', color: 'var(--text-primary)', margin: '0.5rem 0' }}>Client Testimonials</h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '30px' }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="tonal-card" style={{ 
                padding: '2.5rem', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-primary)'
              }}>
                <div>
                  <div style={{ fontSize: '3rem', color: 'var(--accent-secondary)', lineHeight: 1, marginBottom: '1rem', opacity: 0.3 }}>“</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '2rem' }}>
                    {item.text}
                  </p>
                </div>
                
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.25rem', fontWeight: 700 }}>{item.name}</h4>
                  <span style={{ color: 'var(--accent-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: var(--text-secondary);
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          background: var(--accent-secondary);
          opacity: 1;
          width: 25px;
          border-radius: 4px;
          transition: all 0.3s;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
