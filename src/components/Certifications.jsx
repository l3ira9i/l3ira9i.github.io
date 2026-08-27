import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Award } from 'lucide-react';
import './Section.css';

const Certifications = () => {
  const { t } = useLanguage();
  const certsData = t('certifications.items');

  const getLogo = (issuer) => {
    if (issuer.toLowerCase().includes('google')) {
      return 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg';
    }
    if (issuer.toLowerCase().includes('cisco')) {
      return 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg';
    }
    if (issuer.toLowerCase().includes('red team')) {
      return '/0b159df0-b74c-4c63-81f5-f0a8a515bdc1.png';
    }
    return null;
  };

  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title">
      <div className="section-container">
        <h2 className="section-title" id="certifications-title">
          <span className="text-cyan" aria-hidden="true">&lt;</span>
          {t('certifications.title')}
          <span className="text-cyan" aria-hidden="true">/&gt;</span>
        </h2>

        <div className="certifications-grid">
          {Array.isArray(certsData) && certsData.map((issuerBlock, index) => {
            const logoUrl = getLogo(issuerBlock.issuer);
            return (
              <article key={index} className="cert-card glass animate-fade-in" aria-labelledby={`cert-issuer-${index}`}>
                <div className="cert-header">
                  {logoUrl ? (
                    <img
                      src={logoUrl}
                      alt={`${issuerBlock.issuer} logo`}
                      className={`cert-logo ${issuerBlock.issuer.toLowerCase().includes('red team') ? 'red-team-logo' : ''}`}
                      loading="lazy"
                    />
                  ) : (
                    <Award size={28} className="cert-logo-fallback" aria-hidden="true" />
                  )}
                  <h3 className="cert-issuer" id={`cert-issuer-${index}`}>
                    {issuerBlock.issuer}
                  </h3>
                </div>

                <ul className="cert-list" aria-label={`Certifications from ${issuerBlock.issuer}`}>
                  {Array.isArray(issuerBlock.certs) && issuerBlock.certs.map((cert, i) => (
                    <li key={i} className="cert-item">
                      <div className="cert-name">{cert.name}</div>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-link"
                          aria-label={`Verify certificate: ${cert.name}`}
                        >
                          <ExternalLink size={13} aria-hidden="true" />
                          {t('certifications.verify')}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
