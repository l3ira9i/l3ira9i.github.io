import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Network, Activity, Shield, Server } from 'lucide-react';
import './Section.css';

const domainIcons = {
  cyan: <Network size={18} aria-hidden="true" />,
  green: <Activity size={18} aria-hidden="true" />,
  blue: <Server size={18} aria-hidden="true" />,
  purple: <Shield size={18} aria-hidden="true" />,
};

const About = () => {
  const { t } = useLanguage();
  const domains = t('about.domains');

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section-container">
        <h2 className="section-title" id="about-title">
          <span className="text-cyan" aria-hidden="true">&lt;</span>
          {t('about.title')}
          <span className="text-cyan" aria-hidden="true">/&gt;</span>
        </h2>

        <div className="about-layout">
          {/* Text block */}
          <div className="about-text glass">
            <p>{t('about.description')}</p>
          </div>

          {/* Domain badges */}
          {Array.isArray(domains) && (
            <div className="about-domains" aria-label="Domaines d'expertise">
              {domains.map((domain, i) => (
                <div
                  key={i}
                  className={`domain-badge domain-badge--${domain.color}`}
                  role="listitem"
                >
                  <span className="domain-icon">{domainIcons[domain.color]}</span>
                  <span>{domain.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
