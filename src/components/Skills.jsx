import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Network, Server, Shield, Activity, Code } from 'lucide-react';
import './Section.css';

const iconMap = {
  Network: <Network size={20} aria-hidden="true" />,
  Server: <Server size={20} aria-hidden="true" />,
  Shield: <Shield size={20} aria-hidden="true" />,
  Activity: <Activity size={20} aria-hidden="true" />,
  Code: <Code size={20} aria-hidden="true" />,
};

const Skills = () => {
  const { t } = useLanguage();
  const categories = t('skills.categories');

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="section-container">
        <h2 className="section-title" id="skills-title">
          <span className="text-cyan" aria-hidden="true">&lt;</span>
          {t('skills.title')}
          <span className="text-cyan" aria-hidden="true">/&gt;</span>
        </h2>

        <div className="skills-grid">
          {Array.isArray(categories) && categories.map((cat, index) => (
            <article
              key={index}
              className={`skill-card glass skill-card--${cat.color} animate-fade-in`}
              aria-labelledby={`skill-cat-${index}`}
            >
              <div className="skill-card-header">
                <span className={`skill-card-icon skill-card-icon--${cat.color}`}>
                  {iconMap[cat.icon] || null}
                </span>
                <h3 className="skill-card-title" id={`skill-cat-${index}`}>
                  {cat.title}
                </h3>
              </div>

              <div className="skill-tags" role="list" aria-label={`${cat.title} technologies`}>
                {Array.isArray(cat.tags) && cat.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`skill-tag skill-tag--${cat.color}`}
                    role="listitem"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
