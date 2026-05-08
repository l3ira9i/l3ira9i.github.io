import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';
import { Shield, Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.certifications'), href: '#certifications' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo">
          <Shield className="logo-icon" />
          <span className="logo-text">Imad.IRAKI</span>
        </a>

        <div className="desktop-menu">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          
          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggleLanguage}>
              <Globe size={18} />
              <span>{language.toUpperCase()}</span>
            </button>
            <a href="/Imad_IRAKI_CVFR.pdf" download className="resume-btn glass">
              {t('nav.resume')}
            </a>
          </div>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-actions">
            <button className="lang-toggle" onClick={toggleLanguage}>
              <Globe size={18} />
              <span>{language === 'en' ? 'FRançais' : 'ENglish'}</span>
            </button>
            <a href="/Imad_IRAKI_CVFR.pdf" download className="resume-btn glass">
              {t('nav.resume')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
