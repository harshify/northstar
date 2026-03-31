import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { searchIndex } from '../data/searchIndex';

// Hook to easily parse query parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const queryParam = useQuery().get('q') || '';
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(true);
  
  const navigate = useNavigate();

  useEffect(() => {
    setIsSearching(true);
    
    // Simulate slight network delay for premium feel
    const timeout = setTimeout(() => {
      if (!queryParam.trim()) {
        setResults([]);
        setIsSearching(false);
        return;
      }
      
      const term = queryParam.toLowerCase().trim();
      
      const filtered = searchIndex.filter(item => {
        const matchTitle = item.title.toLowerCase().includes(term);
        const matchDesc = item.description.toLowerCase().includes(term);
        const matchKeywords = item.keywords.some(kw => kw.toLowerCase().includes(term));
        const matchType = item.type.toLowerCase().includes(term);
        
        return matchTitle || matchDesc || matchKeywords || matchType;
      });
      
      setResults(filtered);
      setIsSearching(false);
    }, 400); // 400ms premium pause feeling
    
    return () => clearTimeout(timeout);
  }, [queryParam]);

  return (
    <div className="search-page-container" style={{ minHeight: '80vh', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link to="/" style={{ color: 'var(--accent-secondary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', transition: 'opacity 0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = 0.8} onMouseLeave={e => e.currentTarget.style.opacity = 1}>
          &larr; Back to Home
        </Link>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ color: 'var(--accent-primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>Search Results</h1>
          {queryParam ? (
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              Showing results for: <strong style={{ color: 'var(--text-primary)' }}>"{queryParam}"</strong>
            </p>
          ) : (
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              Please enter a search term in the navigation bar to find what you're looking for.
            </p>
          )}
        </div>

        {isSearching ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <div className="spinner" style={{ 
              width: '40px', height: '40px', border: '3px solid rgba(0,0,0,0.1)', 
              borderTop: '3px solid var(--accent-secondary)', borderRadius: '50%', 
              margin: '0 auto 1rem auto', animation: 'spin 1s linear infinite' 
            }}></div>
            <p>Searching our database...</p>
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          </div>
        ) : (
          <div className="results-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {results.length > 0 ? (
              results.map((result, idx) => (
                <Link 
                  to={result.path} 
                  key={result.id}
                  className="tonal-card animate-fade-in"
                  style={{ 
                    display: 'block', 
                    padding: '1.5rem 2rem', 
                    animationDelay: `${idx * 0.1}s`,
                    textDecoration: 'none',
                    borderLeft: '4px solid transparent'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderLeftColor = 'var(--accent-secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderLeftColor = 'transparent'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>{result.title}</h2>
                    <span style={{ 
                      fontSize: '0.8rem', 
                      backgroundColor: 'rgba(30, 57, 141, 0.1)', 
                      color: 'var(--accent-primary)', 
                      padding: '4px 10px', 
                      borderRadius: '12px',
                      fontWeight: '600'
                    }}>
                      {result.type}
                    </span>
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{result.description}</p>
                </Link>
              ))
            ) : queryParam ? (
              <div className="tonal-card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', opacity: 0.5 }}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No results found for "{queryParam}"</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  We couldn't find any exact matches for your search. Try using broader terms or check our Services directly.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button onClick={() => navigate('/solutions')} className="btn btn-secondary">Our Solutions</button>
                  <button onClick={() => navigate('/contact')} className="btn btn-primary">Contact Support</button>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
