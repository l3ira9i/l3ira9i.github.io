import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Section.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-cyan">&lt;</span>
          {t('about.title')}
          <span className="text-cyan">/&gt;</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text glass">
            <p>{t('about.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
