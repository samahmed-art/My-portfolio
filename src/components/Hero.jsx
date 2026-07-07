import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t, lang } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: lang === 'ar' ? 40 : -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  };

  return (
    <section className="hero section">
      {/* الأشكال الهلامية الفاخرة في الخلفية */}
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container id-hero-grid">
        
        {/* الجانب الأول: النصوص والعبارات المكتوبة */}
        <motion.div
          className="hero-text-side"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* التسمية الصغيرة العلوية الفاخرة (Tag) */}
          <motion.span variants={textVariants} className="hero-tag">
            {t('hero.tag') || 'SOFTWARE DEVELOPER'}
          </motion.span>

          <motion.h1 variants={textVariants} className="hero-title">
            {t('hero.title1')} <span className="text-gradient">{t('hero.title2')}</span>
          </motion.h1>
          
          <motion.p variants={textVariants} className="hero-subtitle">
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div variants={textVariants} className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.btn')}{' '}
              {lang === 'ar' ? (
                <ArrowLeft className="btn-icon" size={18} style={{ marginRight: '8px' }} />
              ) : (
                <ArrowRight className="btn-icon" size={18} style={{ marginLeft: '8px' }} />
              )}
            </button>
          </motion.div>
        </motion.div>

        {/* الجانب الثاني: الصورة الشخصية (كما في الصورة image_eca424.jpg) */}
        <motion.div 
          className="hero-image-side"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="profile-image-container">
            {/* ضع صورتك الشخصية داخل مجلد public باسم profile.png */}
            <img src="/logo.png" alt="Profile" className="hero-profile-img" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;