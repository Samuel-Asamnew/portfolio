import React from 'react';
import { data } from '../data';

export default function Certificates() {
  return (
    <section id="certificates" className="section section--alt">
      <div className="container">
        <div className="section-label">04 // Certificates</div>

        <h2 style={{ marginBottom: '1.25rem' }}>Certifications</h2>

        <div className="cert-grid">
          {data.certifications.map((c, i) => (
            <div key={i} className="certificate">
              <div style={{ fontWeight: 700 }}>{c.name}</div>
              <div className="muted-text" style={{ margin: '0.35rem 0', fontSize: '0.9rem' }}>{c.issuer}</div>
              {c.url ? (
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate ↗</a>
              ) : (
                <span className="muted-text" style={{ fontSize: '0.9rem' }}>No link provided</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
