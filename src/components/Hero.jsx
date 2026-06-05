import React, { useEffect, useState } from 'react';
import { data } from '../data';

const roles = data.roles;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;
    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="about" className="section" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        opacity: 0.3,
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%', position: 'relative' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(0,229,160,0.06)', border: '1px solid rgba(0,229,160,0.2)',
          borderRadius: '100px', padding: '6px 14px', marginBottom: '2rem',
          animation: 'fadeIn 0.6s ease both',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 8px var(--accent)',
            animation: 'blink 1.5s ease infinite',
          }} />
          <span style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          lineHeight: 1, letterSpacing: '-0.04em',
          color: 'var(--text)',
          animation: 'fadeUp 0.8s ease both 0.1s',
          marginBottom: '1.5rem',
        }}>
          {data.name.split(' ')[0]}<br />
          <span style={{ color: 'var(--accent)' }}>{data.name.split(' ')[1]}</span>
        </h1>

        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: '1rem', color: 'var(--accent)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          {data.title} · Banking Systems · APIs
        </div>

        {/* Typewriter */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          color: 'var(--muted)', marginBottom: '1.75rem',
          animation: 'fadeUp 0.8s ease both 0.2s',
          minHeight: '2rem',
        }}>
          <span style={{ color: 'var(--accent)' }}>$ </span>
          {displayed}
          <span style={{ animation: 'blink 0.8s step-end infinite', color: 'var(--accent)' }}>▌</span>
        </div>

        {/* Quick facts */}
        <div className="badge-list">
          {['Enterprise banking', 'API-led integrations', 'Full-stack delivery'].map(fact => (
            <span key={fact}>{fact}</span>
          ))}
        </div>

        {/* Summary */}
        <p style={{
          maxWidth: '560px', color: 'var(--muted)', lineHeight: 1.8,
          fontSize: '0.95rem', marginBottom: '3rem',
          animation: 'fadeUp 0.8s ease both 0.3s',
        }}>
          {data.summary}
        </p>

        {/* CTAs */}
        <div className="cta-group" style={{
          animation: 'fadeUp 0.8s ease both 0.4s',
        }}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'var(--accent)', color: 'var(--bg)',
              border: 'none', borderRadius: '8px',
              padding: '16px 34px', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '0.95rem',
              letterSpacing: '0.06em',
            }}
            onMouseEnter={e => { e.target.style.background = '#22c5f2'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)'; }}
          >
            Get in Touch →
          </button>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: 'transparent', color: 'var(--text)',
              border: '1px solid var(--border)', borderRadius: '8px',
              padding: '16px 34px', textDecoration: 'none',
              fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '0.95rem',
              letterSpacing: '0.06em',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)'; e.target.style.transform = 'translateY(0)'; }}
          >
            View LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '3rem', marginTop: '5rem', flexWrap: 'wrap',
          animation: 'fadeUp 0.8s ease both 0.5s',
        }}>
          {[
            { num: '3+', label: 'Years Experience' },
            { num: '6+', label: 'Banking Systems Built' },
            { num: '3', label: 'Companies Worked' },
          ].map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '2.5rem',
                fontWeight: 800, color: 'var(--accent)', lineHeight: 1,
              }}>{s.num}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.75rem', letterSpacing: '0.08em', marginTop: '4px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        animation: 'fadeIn 1s ease both 1s',
      }}>
        <span style={{ color: 'var(--muted)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'scanline 2s ease infinite',
        }} />
      </div>
    </section>
  );
}
