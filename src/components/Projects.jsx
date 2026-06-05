import React from 'react';
import { data } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="section" style={{
      background: 'var(--surface)',
      position: 'relative',
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{
          color: 'var(--accent)', fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem', letterSpacing: '0.15em', marginBottom: '1rem', opacity: 0.7,
        }}>03 // Projects</div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em',
          marginBottom: '3rem', lineHeight: 1.1,
        }}>
          Things I've<br /><span style={{ color: 'var(--accent)' }}>Built</span>
        </h2>

        <div className="project-grid" style={{
          gap: '1.5rem',
        }}>
          {data.projects.map((p, i) => (
            <ProjectCard key={i} project={p} featured={p.highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(0,229,160,0.03)' : 'var(--bg)',
        border: `1px solid ${hovered ? 'rgba(0,229,160,0.3)' : 'var(--border)'}`,
        borderRadius: '6px', padding: '1.8rem',
        cursor: 'default', transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.4)' : 'none',
        position: 'relative',
        gridColumn: featured ? 'span 1' : 'span 1',
      }}
    >
      {featured && (
        <span style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'rgba(0,229,160,0.1)', color: 'var(--accent)',
          fontSize: '0.6rem', letterSpacing: '0.12em', padding: '3px 8px',
          border: '1px solid rgba(0,229,160,0.2)', borderRadius: '2px',
        }}>FEATURED</span>
      )}

      <div style={{
        fontSize: '2rem', marginBottom: '1rem',
        filter: hovered ? 'none' : 'grayscale(0.3)',
        transition: 'filter 0.3s',
      }}>
        {projectEmoji(project.title)}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: '1.05rem', letterSpacing: '-0.01em',
        marginBottom: '0.75rem', color: 'var(--text)', lineHeight: 1.3,
      }}>
        {project.title}
      </h3>

      <p style={{
        color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7,
        marginBottom: '1.5rem',
      }}>
        {project.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            color: 'var(--muted)', fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)', letterSpacing: '0.04em',
          }}>
            {t}
            {project.tech[project.tech.length - 1] !== t && <span style={{ color: 'var(--border)', marginLeft: '6px' }}>·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function projectEmoji(title) {
  if (title.includes('ISO')) return '🏦';
  if (title.includes('IFRS')) return '📊';
  if (title.includes('School')) return '🎓';
  if (title.includes('Derash')) return '💳';
  if (title.includes('Signature')) return '✍️';
  if (title.includes('Ministry')) return '🏛️';
  return '⚙️';
}
