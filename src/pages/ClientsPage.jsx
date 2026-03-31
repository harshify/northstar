import React, { useEffect, useState } from 'react';

const clientsData = [
  { id: 1, name: "RES Women Hospital", location: "Uttarkashi", units: 1 },
  { id: 2, name: "RES Panchkarma Bhawan", location: "Kotdwar", units: 1 },
  { id: 3, name: "High Court Nainital", location: "Uttarakhand", units: 2 },
  { id: 4, name: "Himalayan Institute Hospital Trust", location: "Jolly Grant, Dehradun", units: 3 },
  { id: 5, name: "Star Paper Mills Ltd", location: "Saharanpur (UP)", units: 3 },
  { id: 6, name: "GMVN Hotel Drona", location: "Dehradun", units: 2 },
  { id: 7, name: "GMVN Head office", location: "Dehradun", units: 1 },
  { id: 8, name: "GMVN SKI RESORTS", location: "Auli, Uttarakhand", units: 2 },
  { id: 9, name: "Institute of Engineers (Mazara Sub Station)", location: "Dehradun", units: 1 },
  { id: 10, name: "National Hydro Graphic Office (NHO)", location: "Dehradun", units: 1 },
  { id: 11, name: "CBSE, Kolagarh Road", location: "Dehradun", units: 2 },
  { id: 12, name: "New India Assurance", location: "Dehradun", units: 1 },
  { id: 13, name: "IMS Unison University", location: "Dehradun", units: 1 },
  { id: 14, name: "College of Engineering Roorkie (COER)", location: "Roorkee", units: 1 },
  { id: 15, name: "Uttaranchal University (UIT)", location: "Dehradun", units: 24 },
  { id: 16, name: "Sardar Bhagwan Singh (SBS) college", location: "Dehradun", units: 1 },
  { id: 17, name: "Bajaj Institute of Learning", location: "Dehradun", units: 3 },
  { id: 18, name: "Doon Internation School", location: "Dehradun", units: 2 },
  { id: 19, name: "Doon Institute of Medical Science", location: "Dehradun", units: 2 },
  { id: 20, name: "Amritsar Eye clinic", location: "Dehradun", units: 2 },
  { id: 21, name: "Drishtee Eye Clinic", location: "Dehradun", units: 1 },
  { id: 22, name: "East African India Overseas", location: "Selaqui, Dehradun", units: 2 },
  { id: 23, name: "Akums Drugs", location: "Haridwar", units: 2 },
  { id: 24, name: "Automat Irrigation", location: "Sidcul, Haridwar", units: 8 },
  { id: 25, name: "V.T. Auto manufacturing co.", location: "Industrial area, Haridwar", units: 1 },
  { id: 26, name: "A To Z Automobiles work shop", location: "Roorkee", units: 1 },
  { id: 27, name: "Desana Poly Plastic Industries", location: "Roorkee, Haridwar", units: 1 },
  { id: 28, name: "Neel Giri Electrical", location: "Sidcul, Haridwar", units: 4 },
  { id: 29, name: "Wire Lux Cable Pvt Ltd.", location: "Haridwar", units: 2 },
  { id: 30, name: "Associated Traders & Automobile lifts", location: "Dehradun", units: 2 },
  { id: 31, name: "Kanishk Surgical Hospital", location: "Dehradun", units: 3 },
  { id: 32, name: "Doon Nursing Home", location: "Dehradun", units: 1 },
  { id: 33, name: "Nirmal Ashram & Hospital", location: "Rishikesh", units: 3 },
  { id: 34, name: "Doon Super Specialty", location: "Dehradun", units: 1 },
  { id: 35, name: "Bharat Heart Institute", location: "Dehradun", units: 1 },
  { id: 36, name: "Hans Foundation", location: "Dehradun", units: 1 },
  { id: 37, name: "Arihant Hospital", location: "Dehradun", units: 1 },
  { id: 38, name: "Surya Hospital", location: "Dehradun", units: 1 },
  { id: 39, name: "Subharti Hospital", location: "Dehradun", units: 1 },
  { id: 40, name: "Prem Sukh Hospital", location: "Dehradun", units: 1 },
  { id: 41, name: "Dr. Charitesh Gupta", location: "Dehradun", units: 1 },
  { id: 42, name: "Dr. Vikrant Pathak", location: "Dehradun", units: 1 },
  { id: 43, name: "Dr. Mukesh Dhanda", location: "Dehradun", units: 1 },
  { id: 44, name: "Matrachhaya Hospital", location: "Haridwar", units: 1 },
  { id: 45, name: "City Hospital", location: "Haridwar", units: 1 },
  { id: 46, name: "Bhumanand Hospital", location: "Haridwar", units: 2 },
  { id: 47, name: "Jairam Ashram", location: "Haridwar", units: 6 },
  { id: 48, name: "Prem Nagar Ashram", location: "Haridwar", units: 1 },
  { id: 49, name: "K. K. Infraventure", location: "Dehradun", units: 20 },
  { id: 50, name: "Pearl Hights", location: "Dehradun", units: 4 },
  { id: 51, name: "Garden View Aptt. & Etlantis Club", location: "Dehradun", units: 7 },
  { id: 52, name: "Sachdeva Surgicals", location: "Dehradun", units: 12 },
  { id: 53, name: "Deep Ganga Apartment", location: "Sidcul, Haridwar", units: 60 },
  { id: 54, name: "Swami Narayan Ashram", location: "Haridwar", units: 2 },
  { id: 55, name: "Hotel Garden View", location: "Sidcul, Haridwar", units: 1 },
  { id: 56, name: "Samanwaya Seva Trust, Bharat Mata Mandir", location: "Haridwar", units: 3 },
  { id: 57, name: "Shri Rampanchayatan Salasar Hanuman Trust", location: "Haridwar", units: 1 },
  { id: 58, name: "Hotel Vinayak Grand", location: "Haridwar", units: 2 },
  { id: 59, name: "Hotel Gardenia", location: "Sidcul, Haridwar", units: 2 },
  { id: 60, name: "Gurudwara Singh Sabha", location: "Dehradun", units: 2 },
  { id: 61, name: "Shanti Mukund Hospital", location: "Delhi", units: 4 },
  { id: 62, name: "Dr. Walia charitable Hospital", location: "New Delhi", units: 2 },
  { id: 63, name: "Hotel The Surya", location: "New Delhi", units: 1 },
  { id: 64, name: "Marbella Stones", location: "Ghaziabad", units: 1 },
  { id: 65, name: "Mother Mary School", location: "Delhi", units: 2 },
  { id: 66, name: "Prakash Textile", location: "Noida", units: 2 },
  { id: 67, name: "Aman Export", location: "Noida", units: 3 },
  { id: 68, name: "Dilli Haat cottage Emporium", location: "Delhi", units: 1 },
  { id: 69, name: "TCS Associates Pvt. Ltd.", location: "Faridabad", units: 3 },
  { id: 70, name: "Pramod Associates", location: "Delhi", units: 3 },
  { id: 71, name: "Paras Realtech", location: "Delhi", units: 4 },
  { id: 72, name: "SRM CGSH", location: "Delhi", units: 6 },
  { id: 73, name: "Vee Tee Antimanufacturing", location: "Bhiwadi, Rajasthan", units: 4 },
];

const ClientsPage = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setInView(true), 100);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px', backgroundColor: 'var(--bg-secondary)', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container">
          <div className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
            <div className="badge" style={{ margin: '0 auto 1rem', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 1rem', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 700, borderRadius: '50px', border: '1px solid var(--border-color)' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-secondary)', display: 'inline-block' }} />
              MAJOR CLIENT LIST
            </div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'Space Grotesk' }}>
              Trusted by Industry Leaders
            </h1>
            <p className="hero-subtitle" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              From vast residential complexes to prestigious corporate towers, view our comprehensive track record of reliable lift installations and operations across North India.
            </p>
          </div>
        </div>
      </section>

      {/* Data Table Section */}
      <section className="section-padding">
        <div className="container">
          <div className="tonal-card" style={{ overflow: 'hidden', padding: 0 }}>
            <div style={{ padding: '1.5rem 2rem', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk', margin: 0 }}>Client Portfolio Overview</h2>
              <span style={{ backgroundColor: 'var(--bg-tertiary)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{clientsData.length} Total Projects</span>
            </div>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)', borderBottom: '2px solid var(--border-color)' }}>
                    <th style={{ padding: '1rem 2rem', fontWeight: 700, color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', width: '5%' }}>No.</th>
                    <th style={{ padding: '1rem 2rem', fontWeight: 700, color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', width: '45%' }}>Building / Client Name</th>
                    <th style={{ padding: '1rem 2rem', fontWeight: 700, color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', width: '30%' }}>Location</th>
                    <th style={{ padding: '1rem 2rem', fontWeight: 700, color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', width: '20%', textAlign: 'center' }}>Total Units</th>
                  </tr>
                </thead>
                <tbody>
                  {clientsData.map((client, index) => (
                    <tr 
                      key={client.id} 
                      style={{ 
                        borderBottom: '1px solid var(--border-color)',
                        backgroundColor: index % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-tertiary)',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(235, 114, 18, 0.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-tertiary)'}
                    >
                      <td style={{ padding: '1.25rem 2rem', color: 'var(--text-secondary)', fontWeight: 600 }}>#{client.id}</td>
                      <td style={{ padding: '1.25rem 2rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.05rem' }}>{client.name}</td>
                      <td style={{ padding: '1.25rem 2rem', color: 'var(--text-secondary)' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          {client.location}
                        </span>
                      </td>
                      <td style={{ padding: '1.25rem 2rem', textAlign: 'center' }}>
                        <span style={{ 
                          backgroundColor: client.units > 10 ? 'rgba(235, 114, 18, 0.15)' : 'var(--bg-secondary)', 
                          color: client.units > 10 ? 'var(--accent-secondary)' : 'var(--text-primary)',
                          padding: '6px 16px', 
                          borderRadius: '20px', 
                          fontWeight: 700,
                          border: client.units > 10 ? '1px solid rgba(235, 114, 18, 0.3)' : '1px solid var(--border-color)'
                        }}>
                          {client.units} {client.units === 1 ? 'Unit' : 'Units'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ padding: '1.5rem 2rem', backgroundColor: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                * Above listed are partial highlights of our most prominent projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ClientsPage;
