import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../assets/nsllogo.png';

const NavDropdown = ({ title, items, basePath = '/solutions', closeMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname.startsWith(basePath);
  
  const handleItemClick = () => {
    setIsOpen(false);
    if (closeMobileMenu) closeMobileMenu();
  };

  const getItemPath = (item) => {
    if (typeof item === 'object' && item.to) return item.to;
    const label = typeof item === 'object' ? item.label : item;
    return `${basePath}/${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  };

  const getItemLabel = (item) => typeof item === 'object' ? item.label : item;

  return (
    <div 
      className="nav-dropdown-container" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      style={{ position: 'relative', padding: '1rem 0', width: '100%' }}
    >
      <div className={`nav-link ${isActive ? 'active' : ''}`} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
        <span className="nav-square"></span> {title} <span style={{ fontSize: '0.6em', marginLeft: '4px', paddingTop: '2px' }}>▼</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu animate-fade-in" style={{ animationDuration: '0.2s', minWidth: '260px' }}>
           {items.map((item, idx) => {
             const isSeparator = typeof item === 'object' && item.separator;
             return isSeparator
               ? <li key={idx} style={{ borderTop: '1px solid rgba(255,255,255,0.12)', margin: '6px 0' }} />
               : (
                 <li key={idx} style={typeof item === 'object' && item.highlight ? { fontWeight: 700 } : {}}>
                   <Link 
                     to={getItemPath(item)}
                     onClick={handleItemClick}
                     style={typeof item === 'object' && item.highlight ? { color: 'var(--accent-secondary)' } : {}}
                   >
                     {getItemLabel(item)}
                   </Link>
                 </li>
               );
           })}
        </ul>
      )}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if(searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className={scrolled ? 'glass' : ''} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: '1rem 0',
      backgroundColor: scrolled || isMobileMenuOpen ? 'var(--bg-secondary)' : 'var(--bg-primary)',
      borderBottom: scrolled || isMobileMenuOpen ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        
        <Link to="/" className="logo" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', zIndex: 1001 }}>
          <img 
            src={logoImg}
            alt="North Star Lifts & Escalators Pvt. Ltd." 
            style={{ maxHeight: '50px', objectFit: 'contain' }} 
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
        
        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-links">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
              <span className="nav-square"></span> Home
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname.startsWith('/about') ? 'active' : ''}`} onClick={closeMobileMenu}>
              <span className="nav-square"></span> About
            </Link>
            <NavDropdown
              title="Lift Solutions"
              basePath="/solutions"
              items={[
                'Passenger Lifts',
                'Machine Room Less (MRL) Lifts',
                'Home / Duplex Lifts',
                'Goods / Freight Lifts',
                'Hospital / Stretcher Elevators',
                'Hydraulic Lifts',
                'Service Lifts',
                'Car / Automobile Elevators',
                'Capsule Lifts',
                { separator: true },
                { label: 'All Lifts →', to: '/solutions', highlight: true },
              ]}
              closeMobileMenu={closeMobileMenu}
            />
            <NavDropdown title="Services" basePath="/services" items={['Lift Installation', 'Maintenance', 'Lift Repair', 'Modernization / Upgrade']} closeMobileMenu={closeMobileMenu} />
            <Link to="/projects" className={`nav-link ${location.pathname.startsWith('/projects') ? 'active' : ''}`} onClick={closeMobileMenu}>
              <span className="nav-square"></span> Projects
            </Link>
            <Link to="/clients" className={`nav-link ${location.pathname.startsWith('/clients') ? 'active' : ''}`} onClick={closeMobileMenu}>
              <span className="nav-square"></span> Clients
            </Link>
            <NavDropdown title="Resources" basePath="/resources" items={['Service Areas', 'Blog & Guides']} closeMobileMenu={closeMobileMenu} />
          </div>

          <div className="nav-action" style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Search Icon Toggle */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', transition: 'color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-secondary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>

            <Link to="/contact" className="btn-split" onClick={closeMobileMenu}>
              <span className="text">Get A Quote</span>
              <span className="icon">→</span>
            </Link>
          </div>
        </div>

        {/* Search Dropdown Modal */}
        {isSearchOpen && (
          <div className="search-dropdown animate-fade-in" style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            right: '4%',
            background: 'var(--bg-secondary)',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            border: '1px solid rgba(0,0,0,0.05)',
            zIndex: 1002,
            minWidth: '300px'
          }}>
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="text" 
                placeholder="Search solutions, services..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  border: '1px solid #e2e8f0',
                  outline: 'none',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem'
                }}
                autoFocus
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 1.25rem' }}>Search</button>
            </form>
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
