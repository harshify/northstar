import React, { useState } from 'react';

/* ── Validation helpers ─────────────────────────────────── */
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[6-9]\d{9}$/; // Indian mobile: 10 digits starting 6-9

const validate = (fields) => {
  const e = {};
  if (!fields.firstName.trim()) e.firstName = 'First name is required.';
  if (!fields.lastName.trim())  e.lastName  = 'Last name is required.';
  if (!fields.email.trim())     e.email     = 'Email is required.';
  else if (!emailRe.test(fields.email)) e.email = 'Enter a valid email address.';
  const digits = fields.phone.replace(/[\s\-\+\(\)]/g, '');
  if (!digits) e.phone = 'Phone number is required.';
  else if (!phoneRe.test(digits)) e.phone = 'Enter a valid 10-digit Indian mobile number.';
  if (!fields.projectType) e.projectType = 'Please select a project type.';
  return e;
};

/* ── Input style ────────────────────────────────────────── */
const inputStyle = (hasError) => ({
  width: '100%',
  padding: '0.9rem 1rem',
  backgroundColor: 'var(--bg-primary)',
  border: `1.5px solid ${hasError ? '#ef4444' : 'var(--border-color, #e2e8f0)'}`,
  borderRadius: '6px',
  color: 'var(--text-primary)',
  fontFamily: 'inherit',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s',
});

const labelStyle = {
  display: 'block',
  fontSize: '0.88rem',
  fontWeight: 600,
  color: 'var(--text-secondary)',
  marginBottom: '0.4rem',
};

const errorStyle = {
  color: '#ef4444',
  fontSize: '0.8rem',
  marginTop: '0.3rem',
};

/* ── Field component ────────────────────────────────────── */
const Field = ({ label, error, children }) => (
  <div>
    <label style={labelStyle}>{label}</label>
    {children}
    {error && <p style={errorStyle}>⚠ {error}</p>}
  </div>
);

/* ── Main Component ─────────────────────────────────────── */
const ContactSection = () => {
  const [fields, setFields] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    projectType: '', stops: '', budget: '', message: '',
  });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverMsg, setServerMsg] = useState('');

  const errors = validate(fields);
  const visibleErrors = Object.fromEntries(
    Object.entries(errors).filter(([k]) => touched[k])
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    if (touched[name]) setTouched(t => ({ ...t, [name]: true }));
  };

  const handleBlur = (e) => setTouched(t => ({ ...t, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mark all required fields as touched
    setTouched({ firstName: true, lastName: true, email: true, phone: true, projectType: true });
    if (Object.keys(errors).length > 0) return;

    setStatus('sending');
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setServerMsg(data.message);
        setFields({ firstName: '', lastName: '', email: '', phone: '', projectType: '', stops: '', budget: '', message: '' });
        setTouched({});
      } else {
        setStatus('error');
        setServerMsg(data.message);
      }
    } catch {
      setStatus('error');
      setServerMsg('Could not reach the server. Please call us directly or try again later.');
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .form-grid-2  { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 600px) {
          .form-grid-2  { grid-template-columns: 1fr; }
        }
        .contact-input:focus { border-color: var(--accent-secondary) !important; }
      `}</style>

      <div className="container">
        <div className="contact-grid">

          {/* ── Left: Form ── */}
          <div>
            <div className="badge" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '0.4rem 1rem', backgroundColor: 'var(--bg-tertiary)',
              color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 700,
              borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid var(--border-color, #e2e8f0)'
            }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-secondary)', display: 'inline-block' }} />
              GET A QUOTE
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Let&rsquo;s Build It Together.
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
              Share your project details and our engineering team will respond with a full technical evaluation within 24 hours.
            </p>

            {/* Success */}
            {status === 'success' && (
              <div style={{ background: '#f0fdf4', border: '1.5px solid #22c55e', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem', color: '#15803d', fontWeight: 600 }}>
                ✅ {serverMsg}
              </div>
            )}

            {/* Error */}
            {status === 'error' && (
              <div style={{ background: '#fef2f2', border: '1.5px solid #ef4444', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem', color: '#dc2626', fontWeight: 600 }}>
                ❌ {serverMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              <div className="form-grid-2">
                <Field label="First Name *" error={visibleErrors.firstName}>
                  <input className="contact-input" style={inputStyle(!!visibleErrors.firstName)}
                    type="text" name="firstName" value={fields.firstName} placeholder="e.g. Rajesh"
                    onChange={handleChange} onBlur={handleBlur} />
                </Field>
                <Field label="Last Name *" error={visibleErrors.lastName}>
                  <input className="contact-input" style={inputStyle(!!visibleErrors.lastName)}
                    type="text" name="lastName" value={fields.lastName} placeholder="e.g. Sharma"
                    onChange={handleChange} onBlur={handleBlur} />
                </Field>
              </div>

              <div className="form-grid-2">
                <Field label="Email Address *" error={visibleErrors.email}>
                  <input className="contact-input" style={inputStyle(!!visibleErrors.email)}
                    type="email" name="email" value={fields.email} placeholder="you@example.com"
                    onChange={handleChange} onBlur={handleBlur} />
                </Field>
                <Field label="Phone Number *" error={visibleErrors.phone}>
                  <input className="contact-input" style={inputStyle(!!visibleErrors.phone)}
                    type="tel" name="phone" value={fields.phone} placeholder="+91 98765 43210"
                    onChange={handleChange} onBlur={handleBlur} />
                </Field>
              </div>

              <Field label="Project Type *" error={visibleErrors.projectType}>
                <select className="contact-input" name="projectType" value={fields.projectType}
                  onChange={handleChange} onBlur={handleBlur}
                  style={{ ...inputStyle(!!visibleErrors.projectType), cursor: 'pointer' }}>
                  <option value="">— Select lift type —</option>
                  <option>Passenger Lifts</option>
                  <option>Machine Room Less (MRL) Lifts</option>
                  <option>Home / Duplex Lifts</option>
                  <option>Goods / Freight Lifts</option>
                  <option>Hospital / Stretcher Elevators</option>
                  <option>Hydraulic Lifts</option>
                  <option>Service Lifts</option>
                  <option>Car / Automobile Elevators</option>
                  <option>Capsule Lifts</option>
                </select>
              </Field>

              <div className="form-grid-2">
                <Field label="Number of Stops">
                  <input className="contact-input" style={inputStyle(false)}
                    type="number" name="stops" value={fields.stops} placeholder="e.g. 4 (G+3)"
                    onChange={handleChange} min="2" max="50" />
                </Field>
                <Field label="Estimated Budget">
                  <select className="contact-input" name="budget" value={fields.budget}
                    onChange={handleChange} style={{ ...inputStyle(false), cursor: 'pointer' }}>
                    <option value="">— Select range —</option>
                    <option>Standard / Cost-Effective</option>
                    <option>Mid-Range / Semi-Premium</option>
                    <option>Premium / Glass Cabin</option>
                    <option>Heavy Duty Industrial</option>
                  </select>
                </Field>
              </div>

              <Field label="Additional Message (optional)">
                <textarea className="contact-input" name="message" value={fields.message}
                  onChange={handleChange} rows={4} placeholder="Any specific requirements, site constraints, or questions..."
                  style={{ ...inputStyle(false), resize: 'vertical', lineHeight: 1.6 }} />
              </Field>

              <button type="submit" disabled={status === 'sending'}
                style={{
                  marginTop: '0.5rem', padding: '1.1rem 1.5rem', width: '100%',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  backgroundColor: status === 'sending' ? '#94a3b8' : 'var(--accent-secondary)',
                  color: '#fff', border: 'none', borderRadius: '6px',
                  fontSize: '1rem', fontWeight: 700, cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  fontFamily: 'inherit', transition: 'background-color 0.2s',
                }}>
                <span>{status === 'sending' ? 'Sending…' : 'Submit Enquiry for Quote'}</span>
                <span style={{ fontSize: '1.3rem' }}>{status === 'sending' ? '⏳' : '→'}</span>
              </button>

            </form>
          </div>

          {/* ── Right: Contact Info ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="tonal-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Direct Lines</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <a href="tel:+918979466131" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 700, fontFamily: 'Space Grotesk', textDecoration: 'none' }}>+91 89794 66131</a>
                  <a href="tel:+919897139260" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 700, fontFamily: 'Space Grotesk', textDecoration: 'none' }}>+91 98971 39260</a>
                  <a href="tel:+917900265555" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 700, fontFamily: 'Space Grotesk', textDecoration: 'none' }}>+91 79002 65555</a>
                  <a href="tel:+919412005777" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 700, fontFamily: 'Space Grotesk', textDecoration: 'none' }}>+91 94120 05777</a>
                  <a href="tel:+919359903586" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 700, fontFamily: 'Space Grotesk', textDecoration: 'none' }}>+91 93599 03586</a>
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Email Support</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <a href="mailto:northstarlift@rediffmail.com" style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)', fontWeight: 600, textDecoration: 'none' }}>northstarlift@rediffmail.com</a>
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Head Office</h4>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                  201-IInd Floor, Agarwal Tower, O&P Pocket,<br />
                  Dilshad Garden, Delhi - 110 095<br />
                  Fax: 011-22591053
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Dehradun Address</h4>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                  EWS-27, MDDA Colony Chander Road,<br />
                  Dalanwala, Dehradun (U.K.)
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Haridwar Address</h4>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                  Flat no. C03 Shri Ganga Apartment,<br />
                  Purusottam Vihar, Kankhal<br />
                  Haridwar - 249407
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
