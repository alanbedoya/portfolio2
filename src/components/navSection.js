import React from 'react';
import logo from '../img/logo.svg';
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
          <Link to='/'>1. About Me</Link>
        </li>
        <li>
          <Link to='/work'>2. My Work</Link>
        </li>
        <li>
          <Link to='/contact'>3. Contact Me</Link>
        </li>
        <li>
          <Link to='/'>4. Resume</Link>
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
  padding: 1rem 10rem;
  background-color: #282828;

  img {
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
