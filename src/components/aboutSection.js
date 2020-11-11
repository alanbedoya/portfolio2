import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import about from '../img/about.svg';
import { StyledLayout, StyledDescription, StyledImage } from '../styles';
import styled from 'styled-components';

const servicesSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <h2>
          Here's A Little Bit <br />
          About <span>Me</span>
        </h2>
        <StyledCards>
          <div className='card'>
            <div className='icon'>
              <img src={clock} alt='clock' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={diaphragm} alt='diaphragm' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={money} alt='money' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={teamwork} alt='teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={about} alt='process' />
      </StyledImage>
    </StyledAbout>
  );
};

const StyledAbout = styled(StyledLayout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default servicesSection;
