import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import './ProjectsGallery.css';

const ProjectsGallery = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>{t('projects.title1')} </h2>
          <p>{t('projects.subtitle')}</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-card-link">
            <motion.div
         className="project-card"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
         whileHover={{ 
           y: -8,
           transition: { duration: 0.3, ease: "easeOut" }
         }}
         style={{ background: 'var(--bg-surface)', borderRadius: '12px', overflow: 'hidden' }}
>
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title[lang]} className="project-image" />
                  <div className="project-overlay">
                    <div className="overlay-icon">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title[lang]}</h3>
                  <p>{project.shortDescription[lang]}</p>
                  <div className="tech-tags">
                    {project.techTags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
       
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
