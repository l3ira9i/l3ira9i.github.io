import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Terminal Typing Effect
  useEffect(() => {
    const fullText = t('hero.typing');
    let i = 0;
    setTypedText('');
    
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);
    
    return () => clearInterval(typingInterval);
  }, [t]);

  // Role Alternating Typing Effect
  useEffect(() => {
    const roles = t('hero.roles');
    if (!Array.isArray(roles) || roles.length === 0) return;
    
    const currentRole = roles[roleIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setRoleText(currentRole.substring(0, roleText.length - 1));
        if (roleText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setRoleText(currentRole.substring(0, roleText.length + 1));
        if (roleText.length === currentRole.length) {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }
    
    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex, t]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content animate-fade-in">
          <div className="code-greeting">
            <span className="code-var">greeting</span> = <span className="code-string">"{t('hero.greeting')}"</span>
          </div>
          <h1 className="hero-title">
            <span className="glitch" data-text={t('hero.name')}>{t('hero.name')}</span>
          </h1>
          <h2 className="hero-role">
            {roleText}<span className="cursor">|</span>
          </h2>
          
          <div className="terminal-box glass">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">bash -- ~</span>
            </div>
            <div className="terminal-body">
              <span className="prompt">root@irakiimad:~#</span> {typedText}
              <span className="cursor">_</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#projects" className="cta-btn primary">
              {t('hero.cta')} <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        <div className="hero-image-container animate-fade-in">
          <div className="image-wrapper glass">
            <img src="/a983f2c1-dcac-4dc2-b7a8-829ef97851d0.jpg" alt="Imad IRAKI" className="profile-img" />
            <div className="scan-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
