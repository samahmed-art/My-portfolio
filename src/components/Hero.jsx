import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="hero section">
      {/* Abstract Animated Background */}
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            {t('hero.title1')} <span className="text-gradient">{t('hero.title2')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.btn')} <ArrowRight className="btn-icon" size={20} style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
