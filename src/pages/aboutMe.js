import React from 'react';
import BannerSection from '../components/bannerSection';
import AboutSection from '../components/aboutSection';
import SkillsSection from '../components/skillsSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import styled from 'styled-components';

const aboutMe = () => {
  return (
    <StyledMe>
      <motion.div
        variants={pageAnimation}
        initial='hidden'
        exit='exit'
        animate='show'
      >
        <BannerSection />
        <AboutSection />
        <SkillsSection />
      </motion.div>
    </StyledMe>
  );
};

const StyledMe = styled.div`
  background: #4c4c4c;
`;

export default aboutMe;
