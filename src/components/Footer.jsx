import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{ 
      textAlign: 'center', 
      padding: '2rem', 
      borderTop: '1px solid var(--border-color)',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      backgroundColor: 'var(--bg-secondary)'
    }}>
      <p>{t('footer.text')}</p>
    </footer>
  );
};

export default Footer;
