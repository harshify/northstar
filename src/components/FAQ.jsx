import React, { useState } from 'react';

const faqData = [
  { question: "How much does a standard passenger lift cost?", answer: "Costs vary based on floors, capacity, and cabin finishes. A standard 4-passenger residential lift typically starts around ₹4.5 Lakhs, scaling up for commercial heavy-duty models." },
  { question: "What is the typical installation timeline?", answer: "From site survey and manufacturing to final commissioning, a standard installation takes approximately 6 to 8 weeks." },
  { question: "Are your lifts compliant with safety regulations?", answer: "Absolutely. All North Star elevators are manufactured to IS (Indian Standard) codes and undergo strict multi-point safety inspections before handover." },
  { question: "What does your comprehensive Maintenance cover?", answer: "Our Maintenance covers monthly routine checkups, emergency breakdown assistance, oiling/greasing, and proactive replacement of minor wear-and-tear components." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 1rem',
            backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)',
            fontSize: '0.85rem', fontWeight: 700, borderRadius: '50px', marginBottom: '1.5rem',
            border: '1px solid var(--border-color)'
          }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-secondary)' }}></span>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}>
            Got Questions? We Have Answers.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="tonal-card"
              style={{ 
                padding: '1.5rem 2rem', 
                cursor: 'pointer',
                borderLeft: openIndex === index ? '4px solid var(--accent-secondary)' : '4px solid transparent'
              }}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: openIndex === index ? 'var(--accent-secondary)' : 'var(--text-primary)', margin: 0, fontWeight: 600 }}>
                  {item.question}
                </h3>
                <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, animation: 'fadeIn 0.3s ease-out' }}>
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
