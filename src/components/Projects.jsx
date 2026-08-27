import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Star } from 'lucide-react';
import './Section.css';

const Projects = () => {
  const { t } = useLanguage();
  const projects = t('projects.items');

  return (
    <section id="projects" className="section bg-secondary" aria-labelledby="projects-title">
      <div className="section-container">
        <h2 className="section-title" id="projects-title">
          <span className="text-cyan" aria-hidden="true">&lt;</span>
          {t('projects.title')}
          <span className="text-cyan" aria-hidden="true">/&gt;</span>
        </h2>

        <div className="projects-grid">
          {Array.isArray(projects) && projects.map((project, index) => (
            <article
              key={index}
              className={`project-card glass animate-fade-in ${project.featured ? 'project-card--featured' : ''}`}
              aria-labelledby={`project-title-${index}`}
            >
              {project.featured && (
                <div className="project-featured-badge" aria-label="Featured project">
                  <Star size={12} aria-hidden="true" />
                  {t('projects.featured_badge')}
                </div>
              )}

              <div className="project-content">
                <h3 className="project-title" id={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags" aria-label="Technologies">
                  {Array.isArray(project.tags) && project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="project-footer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} aria-hidden="true" />
                    {t('projects.view_github')}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
