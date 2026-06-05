import React from 'react';
import { data } from '../data';

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
      maxWidth: '900px', margin: '0 auto',
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--accent)' }}>
        SA<span style={{ color: 'var(--muted)' }}>.</span>
      </span>
      <span style={{ color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
        Built with React + Vite · {new Date().getFullYear()}
      </span>
      <a href={`mailto:${data.email}`} style={{
        color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)',
        textDecoration: 'none', transition: 'color 0.2s',
      }}
      onMouseEnter={e => e.target.style.color = 'var(--accent)'}
      onMouseLeave={e => e.target.style.color = 'var(--muted)'}
      >
        {data.email}
      </a>
    </footer>
  );
}
