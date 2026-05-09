import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, ExternalLink } from 'lucide-react';
import './Section.css';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = t('projects.items');

  return (
    <section id="projects" className="section bg-secondary">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-cyan">&lt;</span>
          {t('projects.title')}
          <span className="text-cyan">/&gt;</span>
        </h2>
        
        <div className="projects-grid">
          {Array.isArray(projects) && projects.map((project, index) => (
            <div key={index} className="project-card glass animate-fade-in">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              {project.link && (
                <div className="project-footer">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={18} /> {t('projects.view_github')}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
