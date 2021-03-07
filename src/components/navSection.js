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
      <Menu isOpen={isOpen}>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to='/'>1. About Me</Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '92px' : '0%' }}
          />
        </li>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to='/work'>2. My Work</Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '89px' : '0%' }}
          />
        </li>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to='/contact'>3. Contact Me</Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: '0%'}}
            animate={{ width: pathname === '/contact' ? '111px' : '0%' }}
          />
        </li>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to={resume} target='opener'>
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

  @media (max-width: 847px) {
     padding-top: 0.5rem;
    }

  img {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 4rem;
    height: 4rem;
    @media (max-width: 847px) {
      height: 3.5rem;
    }
  }
`;

const Menu = styled.ul `
    display: flex;
    list-style: none;
    @media (max-width: 847px) {
      flex-direction: column;
      overflow: hidden;
      width: 100%;
      max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
      transition: all 0.7s ease-in;
    }


  li {
    padding: 2rem;
    position: relative; 
    text-align: center;
    @media (max-width: 847px) {
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      height: auto;
    }

    @media (max-width: 847px) {
      text-align: left;
      padding-left: 15rem;
    }
  }

  a {
    color: white;
    text-decoration: none;
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
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
  @media (max-width: 847px) {
    display: flex;
  }
 `;  

const StyledLine = styled(motion.div)`
  height: 0.3rem;
  background: #89c9b8;
  position: absolute;
  /* left: 22%; */

  /* @media (min-width: 1440px) {
    scale: 20%;
  } */

  /* @media (max-width: 1200px) {
    left: 21%;
  } */

  @media (max-width: 847px) { 
      left: 15rem;
  }
`;

export default NavSection;
