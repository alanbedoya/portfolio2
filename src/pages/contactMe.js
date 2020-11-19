import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const contactMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      exit='exit'
      animate='show'
      style={{ background: '#f2dcbb' }}
    >
      <h1>Contact Me</h1>
    </motion.div>
  );
};

export default contactMe;
