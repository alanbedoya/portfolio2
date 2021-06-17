import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';
import resume from '../assets/resume/resume.pdf';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const NavSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <div>
        <Link id='logo' to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to='/'>
            1. About Me
          </Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '92px' : '0%' }}
          />
        </li>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to='/work'>
            2. My Work
          </Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '89px' : '0%' }}
          />
        </li>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to='/contact'>
            3. Contact Me
          </Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '111px' : '0%' }}
          />
        </li>
        <li>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            to={resume}
            target='_blank'
            rel='noopener noreferrer'
          >
            4. Resume
          </Link>
        </li>
      </Menu>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  img {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 53em) {
    position: fixed;
    padding: 0.5rem 1.25rem;
    img {
      height: 3.5rem;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding: 2rem;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 1rem;
    height: auto;
    text-align: left;
  }

  a {
    color: white;
    text-decoration: none;
    @media (max-width: 75em) {
      font-size: 1rem;
    }
  }

  @media (max-width: 53em) {
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: all 0.7s ease-in;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-top: 10px;

  span {
    height: 2px;
    width: 30px;
    background: #89c9b8;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 53em) {
    display: flex;
  }
`;

const StyledLine = styled(motion.div)`
  display: flex;
  justify-content: center;
  height: 0.3rem;
  bottom: 0;
  margin-bottom: 0.625rem;
  background: #89c9b8;
  position: absolute;

  @media (max-width: 53em) {
    display: flex;
    justify-content: center;
  }
`;
