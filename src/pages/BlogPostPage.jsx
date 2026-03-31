import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import blogsData from '../data/blogsData';

import Breadcrumb from '../components/Breadcrumb';

const BlogPostPage = () => {
  const { slug } = useParams();
  const blog = blogsData.find(b => b.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return <Navigate to="/resources/blog-guides" replace />;
  }

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      
      {/* Hero Image / Banner */}
      <div style={{ width: '100%', minHeight: '50vh', backgroundColor: '#000', position: 'relative', display: 'flex', flexDirection: 'column', paddingTop: '160px', paddingBottom: '3rem' }}>
        <img src={blog.image} alt={blog.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, zIndex: 0 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 4%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <Breadcrumb lightText />
          </div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             style={{ maxWidth: '900px', backgroundColor: 'rgba(0,0,0,0.5)', padding: '2.5rem', borderRadius: '12px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-secondary)', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px' }}>
              {blog.category}
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', fontFamily: 'Space Grotesk', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              {blog.title}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '0 4%' }}>
          <article style={{ maxWidth: '800px', width: '100%', backgroundColor: 'var(--bg-secondary)', padding: '4rem 6%', borderRadius: '16px', marginTop: '-4rem', position: 'relative', zIndex: 10, border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
            
            <Link to="/resources/blog-guides" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2.5rem', fontSize: '0.95rem', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <span style={{ fontSize: '1.2rem' }}>←</span> Back to Guides
            </Link>

            <div className="markdown-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
            
            <hr style={{ borderTop: '1px solid var(--border-color)', margin: '3.5rem 0', opacity: 0.5 }} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.05rem' }}>{blog.author}</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>North Star Engineering Expert</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600, margin: 0 }}>Share this guide:</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.backgroundColor = '#1877F2'; e.currentTarget.style.borderColor = '#1877F2'; }} onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.backgroundColor = 'var(--bg-primary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </button>
                  <button style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.backgroundColor = '#0A66C2'; e.currentTarget.style.borderColor = '#0A66C2'; }} onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.backgroundColor = 'var(--bg-primary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </button>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>

      {/* Basic Markdown Styles Injection */}
      <style>{`
        .markdown-body h2 { font-family: 'Space Grotesk'; font-size: 2.2rem; margin-top: 3rem; margin-bottom: 1.25rem; color: var(--text-primary); }
        .markdown-body h3 { font-family: 'Space Grotesk'; font-size: 1.6rem; margin-top: 2.5rem; margin-bottom: 1rem; color: var(--text-primary); }
        .markdown-body p { margin-bottom: 1.5rem; text-align: justify; }
        .markdown-body ul { margin-bottom: 2rem; padding-left: 1.5rem; }
        .markdown-body li { margin-bottom: 0.75rem; padding-left: 0.5rem; }
        .markdown-body strong { color: var(--text-primary); fontWeight: 700; }
        .markdown-body a { color: var(--accent-secondary); text-decoration: none; font-weight: 600;}
      `}</style>
    </div>
  );
};

export default BlogPostPage;
