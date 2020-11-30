import React from 'react';
import about from '../assets/img/about.svg';
import { StyledLayout, StyledDescription } from '../styles';
import styled from 'styled-components';

const servicesSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <h2>
          Here's A Little Bit About <span>Me</span>
        </h2>
        <StyledCard>
          <img src={about} alt='process' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            totam expedita reprehenderit pariatur adipisci cupiditate nesciunt
            corrupti iste est necessitatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident quo laudantium quisquam nemo
            magnam quam, modi officia. Dolores, commodi corrupti? Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Amet a earum
            voluptatibus et recusandae, maxime libero molestiae, aperiam
            incidunt doloribus sequi vel veniam natus. Molestias maxime cumque
            quasi blanditiis iste.
          </p>
        </StyledCard>
      </StyledDescription>
    </StyledAbout>
  );
};

const StyledAbout = styled(StyledLayout)`
  h2 {
    padding-bottom: 5rem;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 50%;
    height: auto;
    padding: 2rem 7rem 4rem 0rem;
  }

  p {
    width: 50%;
    padding: 1rem 0rem 4rem 0rem;
  }
`;

export default servicesSection;
