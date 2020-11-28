import React from 'react';
import BannerSection from '../components/bannerSection';
import AboutSection from '../components/aboutSection';
import SkillsSection from '../components/skillsSection';
import Scroll from '../components/scroll';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const aboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      exit='exit'
      animate='show'
      style={{ background: '#4c4c4c' }}
    >
      <Scroll />
      <BannerSection />
      <AboutSection />
      <SkillsSection />
    </motion.div>
  );
};

export default aboutMe;
