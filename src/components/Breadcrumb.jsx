import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Human-readable label map for path segments
const labelMap = {
  solutions: 'Lift Solutions',
  services:  'Services',
  projects:  'Projects',
  about:     'About',
  contact:   'Contact',
  search:    'Search',
  resources: 'Resources',
  // lift slug overrides
  'passenger-lifts':                 'Passenger Lifts',
  'machine-room-less-mrl-lifts':     'MRL Lifts',
  'home-duplex-lifts':               'Home / Duplex Lifts',
  'goods-freight-lifts':             'Goods / Freight Lifts',
  'hospital-stretcher-elevators':    'Hospital / Stretcher Elevators',
  'hydraulic-lifts':                 'Hydraulic Lifts',
  'service-lifts':                   'Service Lifts',
  'car-automobile-elevators':        'Car / Automobile Elevators',
  'capsule-lifts':                   'Capsule Lifts',
  // service slug overrides
  'installation':                    'Installation',
  'maintenance':                     'Maintenance',
  'repair-overhaul':                 'Repair & Overhaul',
  'modernization':                   'Modernization',
};

const toLabel = (segment) =>
  labelMap[segment] ||
  segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

const Breadcrumb = ({ lightText = false }) => {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);

  // Build cumulative paths: [{label, path}]
  const crumbs = [
    { label: 'Home', path: '/' },
    ...segments.map((seg, i) => ({
      label: toLabel(seg),
      path: '/' + segments.slice(0, i + 1).join('/'),
    })),
  ];

  if (crumbs.length <= 1) return null; // Don't render on homepage

  return (
    <nav aria-label="breadcrumb" style={{ padding: '1rem 0 0' }}>
      <ol style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '0.3rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        fontSize: '0.88rem',
      }}>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.path} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              {i > 0 && (
                <span style={{ color: lightText ? 'rgba(255,255,255,0.5)' : 'var(--text-secondary)', fontSize: '0.75rem', userSelect: 'none' }}>›</span>
              )}
              {isLast ? (
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  style={{
                    color: lightText ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-secondary)'}
                  onMouseLeave={e => e.currentTarget.style.color = lightText ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)'}
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
