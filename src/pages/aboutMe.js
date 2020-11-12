import React from 'react';
import NavSection from '../components/navSection.js';
import BannerSection from '../components/bannerSection';
import AboutSection from '../components/aboutSection';
import SkillsSection from '../components/skillsSection';

const aboutMe = () => {
  return (
    <>
      <NavSection />
      <BannerSection />
      <AboutSection />
      <SkillsSection />
    </>
  );
};

export default aboutMe;
