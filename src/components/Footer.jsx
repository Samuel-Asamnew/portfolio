import React from 'react';
import { data } from '../data';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
      maxWidth: '900px', margin: '0 auto',
    }}>
      <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Back to top" style={{
        background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center',
      }}>
        <Logo size={28} />
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          Built with React + Vite · {new Date().getFullYear()}
        </span>
        <a href={data.github} target="_blank" rel="noreferrer" style={{
          color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)',
          textDecoration: 'none', transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
        onMouseLeave={e => e.target.style.color = 'var(--muted)'}
        >
          GitHub
        </a>
        <a href={data.linkedin} target="_blank" rel="noreferrer" style={{
          color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)',
          textDecoration: 'none', transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
        onMouseLeave={e => e.target.style.color = 'var(--muted)'}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
