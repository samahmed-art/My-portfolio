import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './ContactFooter.css';

const ContactFooter = () => {
  const { t, lang } = useLanguage();

  return (
    <footer id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          
          {/* Form Side */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-header">
              <h2>{t('contact.title1')}</h2>
              <p>{t('contact.subtitle')}</p>
            </div>
            
            <form className="contact-form" action="https://formspree.io/f/maqglbjw" method="POST">
              <div className="input-group">
                <input type="text" id="name" name="name" required placeholder=" " />
                <label htmlFor="name" style={{ right: lang === 'ar' ? '0' : 'auto', left: lang === 'ar' ? 'auto' : '0' }}>{t('contact.name')}</label>
                <div className="input-underline"></div>
              </div>
              <div className="input-group">
                <input type="email" id="email" name="email" required placeholder=" " />
                <label htmlFor="email" style={{ right: lang === 'ar' ? '0' : 'auto', left: lang === 'ar' ? 'auto' : '0' }}>{t('contact.email')}</label>
                <div className="input-underline"></div>
              </div>
              <div className="input-group">
                <textarea id="message" name="message" required placeholder=" " rows="4"></textarea>
                <label htmlFor="message" style={{ right: lang === 'ar' ? '0' : 'auto', left: lang === 'ar' ? 'auto' : '0' }}>{t('contact.message')}</label>
                <div className="input-underline"></div>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                {t('contact.send')} <Send size={18} className="ml-2" style={{marginLeft: lang === 'ar' ? '0' : '8px', marginRight: lang === 'ar' ? '8px' : '0', transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="social-links">
            <a href="https://github.com/samahmed-art/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/samera-ba-zuqamah?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/samdev_1?igsh=eWtlNmpsNnRxNTVl" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="mailto:samahmed212003@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;
