import React from 'react';
import {
  BannerSection,
  AboutSection,
  SkillsSection,
  Scroll,
} from '../components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

export const AboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      exit='exit'
      animate='show'
      style={{ background: '#4c4c4c' }}
    >
      <BannerSection />
      <AboutSection />
      <SkillsSection />
      <Scroll />
    </motion.div>
  );
};
