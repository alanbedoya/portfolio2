import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import developer from '../assets/img/developer.svg';
import {
  StyledLayout,
  StyledDescription,
  StyledHidden,
  StyledImage,
} from '../styles';
import { titleAnimation, fadeAnimation, photoAnimation } from '../animation';
import { motion } from 'framer-motion';
import { Wave } from '.';

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
          src={developer}
          alt='software developer'
        />
      </StyledBannerImage>
      <Wave />
    </StyledBanner>
  );
};

const StyledBanner = styled(StyledLayout)`
  .break::after {
    content: ' ';
  }

  @media only screen and (min-device-width: 12em) and (max-device-width: 64em) {
    flex-direction: column;
    justify-content: center;
    padding-top: 7rem;
    padding-left: 1.5rem;

    button {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 85em) {
    .break {
      display: block;
    }
  }
`;

const StyledBannerImage = styled(StyledImage)`
  object-fit: center;

  @media only screen and (min-device-width: 12em) and (max-device-width: 64em) {
    height: 20rem;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-right: 2rem;
    padding-left: 0;
  }
`;
