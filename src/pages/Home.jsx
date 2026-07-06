import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutCV from '../components/AboutCV';
import ProjectsGallery from '../components/ProjectsGallery';
import ContactFooter from '../components/ContactFooter';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      <AboutCV />
      <ProjectsGallery />
      <ContactFooter />
    </motion.div>
  );
};

export default Home;
