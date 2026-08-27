import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Section.css';

const levelColors = {
  engineer: 'cyan',
  bachelor: 'blue',
  technician: 'purple',
};

const Education = () => {
  const { t } = useLanguage();
  const items = t('education.items');

  return (
    <section id="education" className="section bg-secondary" aria-labelledby="education-title">
      <div className="section-container">
        <h2 className="section-title" id="education-title">
          <span className="text-cyan" aria-hidden="true">&lt;</span>
          {t('education.title')}
          <span className="text-cyan" aria-hidden="true">/&gt;</span>
        </h2>

        <div className="education-grid">
          {Array.isArray(items) && items.map((item, index) => {
            const color = levelColors[item.level] || 'cyan';
            return (
              <article
                key={index}
                className={`edu-card glass animate-fade-in edu-card--${color}`}
                aria-labelledby={`edu-degree-${index}`}
              >
                <div className="edu-icon-wrap">
                  <GraduationCap size={22} aria-hidden="true" />
                </div>

                <div className="edu-content">
                  <h3 className="edu-degree" id={`edu-degree-${index}`}>
                    {item.degree}
                  </h3>
                  <p className="edu-school">{item.school}</p>

                  <div className="edu-meta">
                    <span className="edu-date">
                      <Calendar size={13} aria-hidden="true" />
                      {item.date}
                    </span>
                    <span className="edu-location">
                      <MapPin size={13} aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
