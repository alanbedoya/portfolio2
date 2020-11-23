import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const footerSection = () => {
  return (
    <StyledFooter
      variants={pageAnimation}
      initial='hidden'
      exit='exit'
      animate='show'
    >
      <h1>Footer</h1>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.footer)`
  background-color: #282828;
  margin-top: auto;
  padding-left: 10%;
  padding-right: 10%;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #89c9b8;
  }
`;

export default footerSection;
