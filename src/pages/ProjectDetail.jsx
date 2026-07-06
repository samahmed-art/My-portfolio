import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import './ProjectDetail.css';

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.02 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const { t, lang } = useLanguage();

  if (!project) {
    return <Navigate to="/" />;
  }

  return (
    <motion.div
      className="project-detail-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="container">
        <div className="back-nav">
          <Link to="/" className="btn btn-outline back-btn">
            {lang === 'ar' ? (
              <ArrowRight size={18} className="mr-2" style={{marginLeft: '8px'}} />
            ) : (
              <ArrowLeft size={18} className="mr-2" style={{marginRight: '8px'}} />
            )} 
            {t('detail.back')}
          </Link>
        </div>

        <div className="project-detail-header">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
          >
            {project.title[lang]}
          </motion.h1>
          <motion.div 
            className="tech-tags detail-tags"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
          >
            {project.techTags.map((tag, i) => (
              <span key={i} className="tech-tag">{tag}</span>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="project-hero-image"
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img src={project.image} alt={project.title[lang]} />
        </motion.div>

        <div className="project-content-grid">
          <motion.div 
            className="project-description"
            initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.6 }}
          >
            <h3>{t('detail.overview')}</h3>
            <p>{project.fullDescription[lang]}</p>
          </motion.div>
          
          <motion.div 
            className="project-links-box"
            initial={{ opacity: 0, x: lang === 'ar' ? -30 : 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.6 }}
          >
            <h3>{t('detail.links')}</h3>
            <div className="links-container">
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="link-item github-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                <span>{t('detail.github')}</span>
              </a>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="link-item live-link">
                  <ExternalLink size={24} />
                  <span>{t('detail.live')}</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
