import React, { useState, useEffect } from 'react';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '64px',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem',
        color: 'var(--accent)', letterSpacing: '-0.02em',
      }}>
        SA<span style={{ color: 'var(--text)' }}>.</span>
      </span>

      {/* Desktop */}
      <ul style={{
        display: 'flex', gap: '2rem', listStyle: 'none'
      }} className="nav-desktop">
        {links.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: active === l ? 'var(--accent)' : 'var(--muted)',
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              transition: 'color 0.2s',
              padding: '4px 0',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = active === l ? 'var(--accent)' : 'var(--muted)'}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile burger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: 'var(--text)', display: 'none', flexDirection: 'column', gap: '5px',
      }} className="burger">
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '2px',
            background: menuOpen && i===1 ? 'transparent' : 'var(--accent)',
            transform: menuOpen ? (i===0 ? 'rotate(45deg) translate(5px,5px)' : i===2 ? 'rotate(-45deg) translate(5px,-5px)' : '') : '',
            transition: 'all 0.3s',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(16px)',
          padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
          borderBottom: '1px solid var(--border)',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text)', fontFamily: 'var(--font-display)',
              fontSize: '1.5rem', fontWeight: 700, textAlign: 'left',
              letterSpacing: '-0.02em',
            }}>
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
