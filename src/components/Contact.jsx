import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Section.css';

const contactItems = [
  {
    icon: <Mail size={22} aria-hidden="true" />,
    color: 'cyan',
    labelKey: 'contact.email_label',
    value: 'imadi.ir23@gmail.com',
    href: 'mailto:imadi.ir23@gmail.com',
  },
  {
    icon: <Phone size={22} aria-hidden="true" />,
    color: 'green',
    labelKey: 'contact.phone_label',
    value: '+212 6 9676 1458',
    href: 'tel:+212696761458',
  },
  {
    icon: <Linkedin size={22} aria-hidden="true" />,
    color: 'blue',
    labelKey: 'contact.linkedin_label',
    value: 'linkedin.com/in/imadiraki',
    href: 'https://www.linkedin.com/in/imadiraki/',
    external: true,
  },
  {
    icon: <Github size={22} aria-hidden="true" />,
    color: 'purple',
    labelKey: 'contact.github_label',
    value: 'github.com/l3ira9i',
    href: 'https://github.com/l3ira9i',
    external: true,
  },
];

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="section-container">
        <h2 className="section-title" id="contact-title">
          <span className="text-cyan" aria-hidden="true">&lt;</span>
          {t('contact.title')}
          <span className="text-cyan" aria-hidden="true">/&gt;</span>
        </h2>

        <div className="contact-wrapper">
          <p className="contact-cta">{t('contact.cta')}</p>

          <div className="contact-grid contact-grid--4">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`contact-card glass contact-card--${item.color}`}
                aria-label={`${t(item.labelKey)}: ${item.value}`}
              >
                <div className={`contact-icon-wrap contact-icon--${item.color}`}>
                  {item.icon}
                </div>
                <div className="contact-info">
                  <span className="contact-label">{t(item.labelKey)}</span>
                  <span className="contact-value">{item.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
