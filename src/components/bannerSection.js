import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import portrait from '../assets/img/portrait.jpg';
import {
  StyledLayout,
  StyledDescription,
  StyledHidden,
  StyledImage,
} from '../styles';
import { titleAnimation, fadeAnimation, photoAnimation } from '../animation';
import { motion } from 'framer-motion';
import { Wave } from '../components';

export const BannerSection = () => {
  return (
    <StyledBanner>
      <StyledDescription>
        <div className='title'>
          <StyledHidden>
            <motion.h2 variants={titleAnimation}>Hey There!</motion.h2>
          </StyledHidden>
          <StyledHidden>
            <motion.h2 variants={titleAnimation}>
              I'm <span>Alan</span>,
            </motion.h2>
          </StyledHidden>
          <StyledHidden>
            <motion.h2 variants={titleAnimation}>
              A Software Developer
            </motion.h2>
          </StyledHidden>
        </div>
        <motion.p variants={fadeAnimation}>
          Lets colobarate together to create something
          <span className='break' />
          beautiful and amazing!
        </motion.p>
        <Link to='/contact'>
          <motion.button variants={fadeAnimation}>Lets Connect</motion.button>
        </Link>
      </StyledDescription>
      <StyledBannerImage>
        <motion.img
          variants={photoAnimation}
          src={portrait}
          alt='Alan Bedoya'
        />
      </StyledBannerImage>
      <Wave />
    </StyledBanner>
  );
};

const StyledBanner = styled(StyledLayout)`
  @media (max-width: 53em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    padding-right: 0;
    padding-left: 1.5rem;
  }

  @media (min-width: 90em) {
    .break {
      display: block;
    }
  }
`;

const StyledBannerImage = styled(StyledImage)`
  object-fit: cover;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;

  @media (min-width: 90em) {
    img {
      width: 80%;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }

  @media (max-width: 53em) {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-right: 2rem;
    padding-left: 0;
  }
`;
