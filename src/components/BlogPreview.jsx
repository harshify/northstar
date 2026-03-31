import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: "The Ultimate Guide to Lift Installation Costs in India (2026)",
    category: "Cost Guide",
    date: "March 15, 2026",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Everything you need to know about budgeting for residential and commercial lift installations, including hidden costs and Maintenance factors."
  },
  {
    title: "Capsule vs. Standard Passenger Lifts: Which is Better?",
    category: "Elevator Types",
    date: "February 28, 2026",
    image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Explore the architectural benefits of glass capsule lifts versus the heavy-duty reliability of standard enclosed passenger cabins."
  },
  {
    title: "10 Crucial Elevator Maintenance and Safety Checks",
    category: "Safety & Maintenance",
    date: "February 10, 2026",
    image: "https://images.pexels.com/photos/2581598/pexels-photo-2581598.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "A comprehensive checklist for property managers to ensure their vertical mobility systems remain perfectly compliant and hazard-free."
  }
];

const BlogPreview = () => {
  return (
    <section id="blog-guides" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <div className="badge" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 1rem',
              backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)',
              fontSize: '0.85rem', fontWeight: 700, borderRadius: '50px', marginBottom: '1.5rem',
              border: '1px solid var(--border-color)'
            }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-secondary)' }}></span>
              EXPERT INSIGHTS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}>
              Industry Guides & Resources
            </h2>
          </div>
          <Link to="/resources/blog" className="btn-split dark" style={{ padding: '4px 4px 4px 20px', borderRadius: '4px 4px 16px 4px' }}>
            <span className="text" style={{ fontSize: '0.85rem' }}>View All Articles</span>
            <span className="icon" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>→</span>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {blogPosts.map((post, idx) => (
            <div key={idx} className="tonal-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  backgroundColor: 'var(--accent-secondary)', color: '#fff',
                  padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600
                }}>
                  {post.category}
                </div>
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{post.date}</div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.4 }}>
                  <Link to={`/resources/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} style={{ color: 'inherit' }}>{post.title}</Link>
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {post.excerpt}
                </p>
                <Link to={`/resources/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} style={{ color: 'var(--accent-secondary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto' }}>
                  Read Guide <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
