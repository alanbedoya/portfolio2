import React from 'react';
import logo from '../assets/img/logo.svg';
import resume from '../assets/resume/resume.pdf';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const navSection = () => {
  return (
    <StyledNav>
      <h1>
        <Link id='logo' to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>01. About Me</Link>
        </li>
        <li>
          <Link to='/work'>02. My Work</Link>
        </li>
        <li>
          <Link to='/contact'>03. Contact Me</Link>
        </li>
        <li>
          <Link to={resume} target='opener'>
            04. Resume
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

export default navSection;
