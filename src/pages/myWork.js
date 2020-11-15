import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import racer from '../img/theracer-small.png';
import coffee from '../img/coffee.jpg';

const myWork = () => {
  return (
    <StyledWork>
      <StyledProject>
        <h2>Project 1</h2>
        <div className='line'></div>
        <Link>
          <img src={athlete} alt='athlete' />
        </Link>
      </StyledProject>
      <StyledProject>
        <h2>Project 2</h2>
        <div className='line'></div>
        <Link>
          <img src={racer} alt='racer' />
        </Link>
      </StyledProject>
      <StyledProject>
        <h2>Project 3</h2>
        <div className='line'></div>
        <Link>
          <img src={coffee} alt='coffee' />
        </Link>
      </StyledProject>
    </StyledWork>
  );
};

const StyledWork = styled.div`
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
