import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default to Arabic
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    // Update HTML direction and language attribute based on selected lang
    const htmlEl = document.documentElement;
    htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';
    htmlEl.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  // Helper function to resolve dot-notation paths like "hero.title1"
  const t = (path) => {
    const keys = path.split('.');
    let result = translations[lang];
    for (const key of keys) {
      if (result[key] === undefined) {
        return path; // Fallback to key if not found
      }
      result = result[key];
    }
    return result;
  };

  // Helper to get raw translation arrays/objects (like timeline)
  const getArray = (path) => {
     const keys = path.split('.');
     let result = translations[lang];
     for (const key of keys) {
       if (result[key] === undefined) return [];
       result = result[key];
     }
     return result;
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, getArray }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
