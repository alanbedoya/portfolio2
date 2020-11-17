import React from 'react';
import styled from 'styled-components';
import portrait from '../assets/img/portrait.jpg';
import {
  StyledLayout,
  StyledDescription,
  StyledHidden,
  StyledImage,
} from '../styles';

const bannerSection = () => {
  return (
    <StyledBanner>
      <StyledDescription>
        <div className='title'>
          <StyledHidden>
            <h2>Hey There!</h2>
          </StyledHidden>
          <StyledHidden>
            <h2>
              I'm <span>Alan</span>
            </h2>
          </StyledHidden>
          <StyledHidden>
            <h2>Bedoya</h2>
          </StyledHidden>
        </div>
        <p>
          Lets colobarate together to create something <br />
          beautiful and amazing!
        </p>
        <button>Lets Connect!</button>
      </StyledDescription>
      <StyledBannerImage>
        <img src={portrait} alt='Alan Bedoya' />
      </StyledBannerImage>
    </StyledBanner>
  );
};

const StyledBanner = styled(StyledLayout)``;

const StyledBannerImage = styled(StyledImage)`
  object-fit: contain;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;

export default bannerSection;
