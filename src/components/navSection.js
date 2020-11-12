import React from 'react';
import logo from '../img/logo.svg';
import styled from 'styled-components';

const navSection = () => {
  return (
    <StyledNav>
      <h1>
        <img src={logo} alt='logo' />
      </h1>
      <ul>
        <li>
          <a href='#'>1. About Me</a>
        </li>
        <li>
          <a href='#'>2. My Work</a>
        </li>
        <li>
          <a href='#'>3. Contact Me</a>
        </li>
        <li>
          <a href='#'>4. Resume</a>
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
