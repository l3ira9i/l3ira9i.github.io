import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-name">Imad Iraki</span>
          <span className="footer-tagline">{t('footer.tagline')}</span>
        </div>

        <div className="footer-links" aria-label="Social links">
          <a
            href="https://www.linkedin.com/in/imadiraki/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/l3ira9i"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub profile"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href="mailto:imadi.ir23@gmail.com"
            className="footer-link"
            aria-label="Send email"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>

        <p className="footer-copy">{t('footer.text')}</p>
      </div>
    </footer>
  );
};

export default Footer;
