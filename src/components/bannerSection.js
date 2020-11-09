import React from 'react';
import portrait from '../img/portrait.jpg';
import styled from 'styled-components';

const bannerSection = () => {
  return (
    <StyledBanner>
      <StyledDescription>
        <div className='title'>
          <div className='hide'>
            <h2>Hey There!</h2>
          </div>
          <div className='hide'>
            <h2>
              I'm <span>Alan</span>
            </h2>
          </div>
          <div className='hide'>
            <h2>Bedoya</h2>
          </div>
        </div>
        <p>
          Lets colobarate together to create something beautiful and amazing!
        </p>
        <button>Lets Connect!</button>
      </StyledDescription>
      <StyledImage>
        <img src={portrait} alt='Alan Bedoya' />
      </StyledImage>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  border-radius: 30% 70% 70% 30% / 30% 16% 84% 70%;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
`;
export default bannerSection;
