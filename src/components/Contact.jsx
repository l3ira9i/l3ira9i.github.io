import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Section.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <h2 className="section-title">
          <span className="text-cyan">&lt;</span>
          {t('contact.title')}
          <span className="text-cyan">/&gt;</span>
        </h2>
        
        <div className="contact-content glass">
          <p className="contact-message">{t('contact.message')}</p>
          
          <div className="contact-links">
            <a href="mailto:imadi.ir23@gmail.com" className="contact-item">
              <div className="icon-wrapper glass">
                <Mail className="text-cyan" />
              </div>
              <span>imadi.ir23@gmail.com</span>
            </a>
            
            <a href="tel:+212696761458" className="contact-item">
              <div className="icon-wrapper glass">
                <Phone className="text-green" />
              </div>
              <span>+212 6 9676 1458</span>
            </a>
            
            <a href="https://linkedin.com/in/imad-iraki" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="icon-wrapper glass">
                <Linkedin className="text-purple" />
              </div>
              <span>LinkedIn</span>
            </a>
            
            <a href="https://github.com/l3ira9i" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="icon-wrapper glass">
                <Github />
              </div>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
