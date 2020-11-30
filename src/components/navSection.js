import React from 'react';
import logo from '../assets/img/logo.svg';
import resume from '../assets/resume/resume.pdf';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavSection = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id='logo' to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>1. About Me</Link>
          <Styledline
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '55%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/work'>2. My Work</Link>
          <Styledline
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '55%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/contact'>3. Contact Me</Link>
          <Styledline
            transition={{ duration: 0.75 }}
            initial={{ width: '0%', left: '21%' }}
            animate={{ width: pathname === '/contact' ? '60%' : '0%' }}
          />
        </li>
        <li>
          <Link to={resume} target='opener'>
            4. Resume
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  img {
    display: flex;
    justify-content: flex-start;
    width: 4rem;
    height: 4rem;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding: 5vh;
    position: relative;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Styledline = styled(motion.div)`
  height: 0.3rem;
  background: #89c9b8;
  position: absolute;
  left: 23%;
  @media (max-width: 1440px) {
    left: 23%;
    width: 10%;
  }
`;

export default NavSection;
