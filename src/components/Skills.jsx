import React from 'react';
import { data } from '../data';

const categories = [...new Set(data.skills.map(s => s.category))];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{
        color: 'var(--accent)', fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem', letterSpacing: '0.15em', marginBottom: '1rem', opacity: 0.7,
      }}>04 // Skills</div>

      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em',
        marginBottom: '3rem', lineHeight: 1.1,
      }}>
        Tech<br /><span style={{ color: 'var(--accent)' }}>Stack</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
        {data.skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} delay={i * 50} />
        ))}
      </div>

      {/* Education + Certs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: '6px', padding: '2rem',
        }}>
          <div style={{ color: 'var(--accent)', fontSize: '0.72rem', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            EDUCATION
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.4rem' }}>
            {data.education.degree}
          </h3>
          <div style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            {data.education.school}
          </div>
          <div style={{
            display: 'inline-block', background: 'rgba(0,229,160,0.08)',
            color: 'var(--accent)', padding: '4px 12px',
            border: '1px solid rgba(0,229,160,0.2)', borderRadius: '3px',
            fontSize: '0.8rem', fontFamily: 'var(--font-mono)',
          }}>
            GPA: {data.education.gpa}
          </div>
        </div>

        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: '6px', padding: '2rem',
        }}>
          <div style={{ color: 'var(--accent)', fontSize: '0.72rem', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            CERTIFICATIONS
          </div>
          {data.certifications.map(c => (
            <div key={c.name} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '0.75rem', fontSize: '0.85rem',
            }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>▸</span>
              <span style={{ color: 'var(--text)' }}>{c.name}</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.75rem', marginLeft: 'auto' }}>
                {c.issuer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, delay }) {
  const [animated, setAnimated] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300 + delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: '160px', flexShrink: 0, fontSize: '0.8rem', color: '#ccc', fontFamily: 'var(--font-mono)' }}>
        {skill.name}
      </div>
      <div style={{ flex: 1, height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: '2px',
          background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
          width: animated ? `${skill.level}%` : '0%',
          transition: `width 1s ease ${delay}ms`,
          boxShadow: `0 0 8px rgba(0,229,160,0.4)`,
        }} />
      </div>
      <div style={{ width: '36px', textAlign: 'right', fontSize: '0.72rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
        {skill.level}%
      </div>
    </div>
  );
}
