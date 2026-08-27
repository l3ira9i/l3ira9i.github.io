import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Network, Menu, X, Globe, Github, Linkedin, Download, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.certifications'), href: '#certifications' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#hero" className="logo" aria-label="Home – Imad Iraki">
          <Network className="logo-icon" size={22} aria-hidden="true" />
          <span className="logo-text">Imad.IRAKI</span>
        </a>

        {/* Desktop menu */}
        <div className="desktop-menu">
          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.name} role="listitem">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a
              href="https://github.com/l3ira9i"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-btn"
              aria-label="GitHub profile"
            >
              <Github size={18} aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/imadiraki/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-btn"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>

            <button
              className="lang-toggle"
              onClick={toggleLanguage}
              aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
            >
              <Globe size={16} aria-hidden="true" />
              <span>{language === 'en' ? 'FR' : 'EN'}</span>
            </button>

            {/* Theme toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb">
                  {theme === 'dark'
                    ? <Moon size={13} aria-hidden="true" />
                    : <Sun size={13} aria-hidden="true" />
                  }
                </span>
              </span>
            </button>

            <a
              href="/Imad_IRAKI.pdf"
              download
              className="resume-btn glass"
              aria-label="Download CV"
            >
              <Download size={15} aria-hidden="true" />
              {t('nav.resume')}
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="mobile-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb">
                {theme === 'dark'
                  ? <Moon size={13} aria-hidden="true" />
                  : <Sun size={13} aria-hidden="true" />
                }
              </span>
            </span>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass" role="menu" aria-label="Mobile navigation">
          <ul className="mobile-nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.name} role="listitem">
                <a href={link.href} onClick={closeMobileMenu} role="menuitem">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-actions">
            <div className="mobile-social">
              <a
                href="https://github.com/l3ira9i"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-btn"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/imadiraki/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <button
              className="lang-toggle"
              onClick={toggleLanguage}
              aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
            >
              <Globe size={16} aria-hidden="true" />
              <span>{language === 'en' ? 'Français' : 'English'}</span>
            </button>
            <a
              href="/Imad_IRAKI.pdf"
              download
              className="resume-btn glass"
            >
              <Download size={15} aria-hidden="true" />
              {t('nav.resume')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
