import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';
import blogsData from '../data/blogsData';

const BlogGuidesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: '80px', backgroundColor: 'var(--bg-secondary)', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container" style={{ padding: '0 4%' }}>
          <Breadcrumb />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginTop: '2rem' }}
          >
            <div className="badge" style={{ margin: '0 auto 1rem', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 1rem', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 700, borderRadius: '50px', border: '1px solid var(--border-color)' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-secondary)', display: 'inline-block' }} />
              EXPERT INSIGHTS
            </div>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'Space Grotesk' }}>
              Blog & Guides
            </h1>
            <p className="hero-subtitle" style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Deep dives into vertical mobility technology, commercial lift modernization, and home elevator design trends tailored for the Indian landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ padding: '0 4%' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem',
          }}>
            {blogsData.map((blog, idx) => (
              <motion.div 
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ 
                  borderRadius: '12px', overflow: 'hidden', 
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex', flexDirection: 'column',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ width: '100%', height: '240px', backgroundColor: '#e2e8f0', overflow: 'hidden', position: 'relative' }}>
                  <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="blog-img-hover" />
                  <div style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: 'var(--accent-secondary)', color: '#fff', padding: '6px 14px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {blog.category}
                  </div>
                </div>
                <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontFamily: 'Space Grotesk', marginBottom: '1rem', lineHeight: 1.3 }}>
                    <Link to={`/resources/blog-guides/${blog.id}`} style={{ color: 'inherit', textDecoration: 'none' }} className="hover-accent">
                      {blog.title}
                    </Link>
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>
                    {blog.excerpt}
                  </p>
                  <Link to={`/resources/blog-guides/${blog.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', transition: 'gap 0.2s' }} className="read-more-link">
                    Read Article <span className="arrow" style={{ fontSize: '1.2rem', transition: 'transform 0.2s' }}>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        .blog-img-hover:hover { transform: scale(1.05); }
        .hover-accent:hover { color: var(--accent-secondary) !important; }
        .read-more-link:hover .arrow { transform: translateX(4px); }
      `}</style>
    </div>
  );
};

export default BlogGuidesPage;
