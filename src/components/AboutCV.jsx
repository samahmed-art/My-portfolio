import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './AboutCV.css';

const AboutCV = () => {
  const { t, getArray, lang } = useLanguage();
  const timeline = getArray('about.timeline');

  return (
    <section id="about" className="section about-cv">
      <div className="container">
        <motion.div 
          className="about-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side: About Me */}
          <div className="about-text">
            <h2><span className="text-gradient">{t('about.title1')}</span> {t('about.title2')}</h2>
            <p>{t('about.p1')}</p>
            
      <div className="cv-actions">
  {/* زر عرض السيرة الذاتية */}
  <a 
    href={lang === 'ar' ? '/سميرة_أحمد_عمر_بازقامة1.pdf' : 'Samera_Ahmed_Omar_Ba_Zuqamah1.pdf'} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="btn btn-outline"
  >
    <ExternalLink size={18} className="mr-2" style={{marginRight: lang === 'ar' ? '0' : '8px', marginLeft: lang === 'ar' ? '8px' : '0'}} /> {t('about.viewCV')}
  </a>

  {/* زر تحميل السيرة الذاتية */}
  <a 
    href={lang === 'ar' ? '/سميرة_أحمد_عمر_بازقامة1.pdf' : '/Samera_Ahmed_Omar_Ba_Zuqamah1.pdf'} 
    download={lang === 'ar' ? 'سميرة_أحمد_عمر_بازقامة1.pdf' : 'Samera_Ahmed_Omar_Ba_Zuqamah1.pdf'} 
    className="btn btn-primary"
  >
    <Download size={18} className="mr-2" style={{marginRight: lang === 'ar' ? '0' : '8px', marginLeft: lang === 'ar' ? '8px' : '0'}} /> {t('about.downloadCV')}
  </a>
</div>
          </div>

          {/* Right Side: Interactive Timeline */}
          <div className="about-timeline">
            <h3>{t('about.experience')}</h3>
            <div className="timeline-container">
              {timeline.map((item, index) => (
                <motion.div 
  key={index} 
  className="timeline-item"
  initial={{ opacity: 0, x: lang === 'ar' ? -30 : 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-role">{item.role}</h4>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCV;
