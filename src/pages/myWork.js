import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../assets/img/athlete-small.png';
import racer from '../assets/img/theracer-small.png';
import coffee from '../assets/img/coffee.jpg';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const myWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial='hidden'
      exit='exit'
      animate='show'
      style={{ background: '#bbbfca' }}
    >
      <StyledProject>
        <h2>Project 1</h2>
        <div className='line'></div>
        <Link to='/work/project1'>
          <img src={athlete} alt='athlete' />
        </Link>
      </StyledProject>
      <StyledProject>
        <h2>Project 2</h2>
        <div className='line'></div>
        <Link to='/work/project2'>
          <img src={racer} alt='racer' />
        </Link>
      </StyledProject>
      <StyledProject>
        <h2>Project 3</h2>
        <div className='line'></div>
        <Link to='/work/project3'>
          <img src={coffee} alt='coffee' />
        </Link>
      </StyledProject>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledProject = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 75rem;
    height: 45rem;
    object-fit: cover;
  }
`;
export default myWork;
