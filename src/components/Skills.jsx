import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Section.css';

const Skills = () => {
  const { t } = useLanguage();
  const categories = t('skills.categories');

  return (
    <section id="skills" className="section bg-secondary">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-cyan">&lt;</span>
          {t('skills.title')}
          <span className="text-cyan">/&gt;</span>
        </h2>
        
        <div className="skills-card-grid">
          {Array.isArray(categories) && categories.map((cat, index) => (
            <div key={index} className="skill-category-card glass animate-fade-in">
              <h3 className="skill-cat-title">{cat.title}</h3>
              <ul className="skill-cat-items">
                {Array.isArray(cat.items) && cat.items.map((item, i) => (
                  <li key={i} className="skill-item-text">
                    {typeof item === 'object' ? (
                      <>
                        <strong>{item.name}</strong><br />
                        {item.desc}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
