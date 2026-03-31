import React, { useState } from 'react';

const faqData = [
  { question: "What types of lifts do you manufacture?", answer: "We manufacture a wide range of specialized lifts including passenger capacities for residential and commercial use, hospital stretcher elevators, heavy-duty industrial freight lifts, and customized dumbwaiters." },
  { question: "What is the typical manufacturing and installation timeline?", answer: "From final site survey and design approval to manufacturing, delivery, and final commissioning, a standard installation typically takes approximately 6 to 8 weeks." },
  { question: "Are your lifts compliant with safety regulations?", answer: "Absolutely. All North Star elevators are strictly manufactured to adhere to IS (Indian Standard) codes and undergo rigorous multi-point safety inspections before handover to ensure ultimate passenger safety." },
  { question: "Do you offer customized elevator cabin designs?", answer: "Yes, we specialize in custom aesthetics. You can choose from a variety of premium cabin finishes, including stainless steel (hairline, mirror, or gold finish), decorative glass, bespoke lighting, and custom flooring options." },
  { question: "What does your comprehensive maintenance contract cover?", answer: "Our comprehensive AMC (Annual Maintenance Contract) includes regular preventive maintenance visits, 24/7 emergency breakdown assistance, essential lubrication, and the proactive replacement of minor wear-and-tear components to ensure uninterrupted operation." }
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
