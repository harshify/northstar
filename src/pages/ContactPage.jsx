import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import Breadcrumb from '../components/Breadcrumb';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ paddingTop: '100px', minHeight: '80vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ padding: '0 4% 0' }}>
        <Breadcrumb />
      </div>
      <ContactSection />
    </main>
  );
};

export default ContactPage;
