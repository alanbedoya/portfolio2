import React, {useState} from 'react';
import logo from '../assets/img/logo.svg';
import resume from '../assets/resume/resume.pdf';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavSection = () => {
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
      <ul>
        <li>
          <Link to='/'>1. About Me</Link>
          <Styledline
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '61%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/work'>2. My Work</Link>
          <Styledline
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '61%' : '0%' }}
          />
        </li>
        <li>
          <Link to='/contact'>3. Contact Me</Link>
          <Styledline
            transition={{ duration: 0.75 }}
            initial={{ width: '0%', left: '18%' }}
            animate={{ width: pathname === '/contact' ? '65%' : '0%' }}
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
    padding: 4vh;
    position: relative;
  }

  a {
    color: white;
    text-decoration: none;
    @media (max-width: 1440px) {
      font-size: 1rem;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #89c9b8;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
 `;  

const Styledline = styled(motion.div)`
  height: 0.3rem;
  background: #89c9b8;
  position: absolute;
  left: 22%;

  @media (max-width: 1440px) {
    left: 20%;
  }

  @media (max-width: 1200px) {
    left: 21%;
  }
`;

export default NavSection;
