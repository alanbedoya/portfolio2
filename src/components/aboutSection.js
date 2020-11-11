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
          <StyledCard>
            <div className='icon'>
              <img src={clock} alt='clock' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={diaphragm} alt='diaphragm' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={money} alt='money' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className='icon'>
              <img src={teamwork} alt='teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledAboutImage>
        <img src={about} alt='process' />
      </StyledAboutImage>
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

const StyledCard = styled.div`
  flex-basis: 16rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;

const StyledAboutImage = styled(StyledImage)`
  img {
    object-fit: contain;
  }
`;

export default servicesSection;
