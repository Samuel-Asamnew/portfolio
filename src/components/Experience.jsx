import React, { useState } from 'react';
import { data } from '../data';

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = data.experience[active];

  return (
    <section id="experience" className="section section--alt">
      <div className="container" style={{ maxWidth: '900px' }}>
        <SectionLabel>02 // Experience</SectionLabel>

      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        letterSpacing: '-0.03em', marginBottom: '3rem',
        lineHeight: 1.1,
      }}>
        Where I've<br /><span style={{ color: 'var(--accent)' }}>Worked</span>
      </h2>

      <div className="experience-grid">
        {/* Tab list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', minWidth: '180px' }}>
          {data.experience.map((e, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              background: 'none', border: 'none',
              borderLeft: `2px solid ${active === i ? 'var(--accent)' : 'var(--border)'}`,
              padding: '14px 20px', cursor: 'pointer', textAlign: 'left',
              color: active === i ? 'var(--accent)' : 'var(--muted)',
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              transition: 'all 0.2s', whiteSpace: 'nowrap',
              background: active === i ? 'rgba(0,229,160,0.04)' : 'transparent',
            }}>
              {e.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem',
              letterSpacing: '-0.02em', color: 'var(--text)',
            }}>
              {exp.role} <span style={{ color: 'var(--accent)' }}>@ {exp.company}</span>
            </h3>
            <div style={{ color: 'var(--muted)', fontSize: '0.78rem', letterSpacing: '0.06em', marginTop: '6px' }}>
              {exp.period}
            </div>
          </div>

          <ul style={{ listStyle: 'none', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {exp.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', marginTop: '4px', flexShrink: 0 }}>▸</span>
                <span style={{ color: '#b0b0b0', lineHeight: 1.7, fontSize: '0.9rem' }}>{h}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '2rem' }}>
            {exp.tech.map(t => (
              <span key={t} style={{
                background: 'rgba(0,229,160,0.06)', border: '1px solid rgba(0,229,160,0.15)',
                color: 'var(--accent)', padding: '4px 12px', borderRadius: '3px',
                fontSize: '0.72rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      color: 'var(--accent)', fontFamily: 'var(--font-mono)',
      fontSize: '0.72rem', letterSpacing: '0.15em',
      marginBottom: '1rem', opacity: 0.7,
    }}>{children}</div>
  );
}
