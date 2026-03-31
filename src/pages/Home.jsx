import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import ScrollAnimation from '../components/ScrollAnimation';

// Lazy loading below-the-fold sections for optimized UX
const AboutOverview = lazy(() => import('../components/AboutOverview'));
const Certifications = lazy(() => import('../components/Certifications'));
const LiftSolutions = lazy(() => import('../components/LiftSolutions'));
const Services = lazy(() => import('../components/Services'));
const Projects = lazy(() => import('../components/Projects'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const BlogPreview = lazy(() => import('../components/BlogPreview'));
const FAQ = lazy(() => import('../components/FAQ'));
const ContactSection = lazy(() => import('../components/ContactSection'));

const Home = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)' }}>Loading modules...</div>}>
        <ScrollAnimation><AboutOverview /></ScrollAnimation>
        <ScrollAnimation><LiftSolutions /></ScrollAnimation>
        <ScrollAnimation><Certifications /></ScrollAnimation>
        <ScrollAnimation><Services /></ScrollAnimation>
        <ScrollAnimation><Projects /></ScrollAnimation>
        <ScrollAnimation><WhyChooseUs /></ScrollAnimation>
        <ScrollAnimation><BlogPreview /></ScrollAnimation>
        <ScrollAnimation><FAQ /></ScrollAnimation>
        <ScrollAnimation><ContactSection /></ScrollAnimation>
      </Suspense>
    </main>
  );
};

export default Home;
