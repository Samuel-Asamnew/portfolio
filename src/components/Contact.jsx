import React from 'react';
import { data } from '../data';

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '8rem 2rem',
      background: 'var(--surface)',
      textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,229,160,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{
          color: 'var(--accent)', fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem', letterSpacing: '0.15em', marginBottom: '1.5rem', opacity: 0.7,
        }}>05 // Contact</div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          letterSpacing: '-0.04em', lineHeight: 1,
          marginBottom: '1.5rem',
        }}>
          Let's<br /><span style={{ color: 'var(--accent)' }}>Connect</span>
        </h2>

        <p style={{
          color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.8,
          marginBottom: '3rem', maxWidth: '440px', margin: '0 auto 3rem',
        }}>
          Open to new opportunities, collaborations, or just a tech conversation.
          Drop me a message — I respond quickly.
        </p>

        <a href={`mailto:${data.email}`} style={{
          display: 'inline-block',
          background: 'var(--accent)', color: 'var(--bg)',
          padding: '16px 40px', borderRadius: '4px',
          fontFamily: 'var(--font-mono)', fontWeight: 500,
          fontSize: '0.9rem', letterSpacing: '0.05em',
          textDecoration: 'none', transition: 'all 0.2s',
          boxShadow: '0 0 30px rgba(0,229,160,0.2)',
        }}
        onMouseEnter={e => { e.target.style.background = '#00c488'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 8px 30px rgba(0,229,160,0.3)'; }}
        onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0 30px rgba(0,229,160,0.2)'; }}
        >
          {data.email}
        </a>

        {/* Info row */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '2rem',
          marginTop: '4rem', flexWrap: 'wrap',
        }}>
          {[
            { label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
            { label: 'Location', value: data.location, href: null },
            { label: 'GitHub', value: 'github.com', href: data.github },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--muted)', fontSize: '0.65rem', letterSpacing: '0.12em', marginBottom: '4px' }}>
                {item.label}
              </div>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" style={{
                  color: 'var(--text)', textDecoration: 'none',
                  fontSize: '0.85rem', fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text)'}
                >{item.value}</a>
              ) : (
                <span style={{ color: 'var(--text)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Languages */}
        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ color: 'var(--muted)', fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            SPOKEN LANGUAGES
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {data.languages.map(l => (
              <div key={l.lang} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                borderRadius: '4px', padding: '8px 16px',
                fontSize: '0.8rem', fontFamily: 'var(--font-mono)',
              }}>
                <span style={{ color: 'var(--text)' }}>{l.lang}</span>
                <span style={{ color: 'var(--muted)', marginLeft: '8px' }}>·</span>
                <span style={{ color: 'var(--accent)', marginLeft: '8px', fontSize: '0.72rem' }}>{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
