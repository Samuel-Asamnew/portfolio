import React from 'react';
import { data } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="section section--alt" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.15em', marginBottom: '1rem', opacity: 0.7 }}>03 // Projects</div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '3rem', lineHeight: 1.1 }}>Things I've<br /><span style={{ color: 'var(--accent)' }}>Built</span></h2>

        <div className="project-grid" style={{ gap: '1.5rem' }}>
          {data.projects.map((p, i) => (
            <ProjectCard key={i} project={p} featured={p.highlight} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <article className={`card project-card${featured ? ' project-card--featured' : ''}`}>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Try demo ↗</a>
      )}

      {featured && (
        <span className="project-badge">FEATURED</span>
      )}

      <div className="project-emoji">{projectEmoji(project.title)}</div>

      <h3 className="project-title">{project.title}</h3>

      <p className="project-desc">{project.desc}</p>

      <div className="project-tech">
        {project.tech.map((t, idx) => (
          <span key={t} className="tech">
            {t}
            {idx !== project.tech.length - 1 && <span className="dot">·</span>}
          </span>
        ))}
      </div>
    </article>
  );
}

function projectEmoji(title) {
  if (title.includes('National') || title.includes('ID') || title.includes('Identification')) return '🛂';
  if (title.includes('ISO')) return '🏦';
  if (title.includes('IFRS')) return '📊';
  if (title.includes('School')) return '🎓';
  if (title.includes('Derash')) return '💳';
  if (title.includes('Signature')) return '✍️';
  if (title.includes('Ministry')) return '🏛️';
  return '⚙️';
}
