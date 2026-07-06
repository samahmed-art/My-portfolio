import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-switcher" 
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      {lang === 'ar' ? 'EN' : 'عربي'}
    </button>
  );
};

export default LanguageSwitcher;
