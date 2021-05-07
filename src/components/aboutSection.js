import React from 'react';
import about from '../assets/img/about.svg';
import { StyledLayout, StyledDescription } from '../styles';
import styled from 'styled-components';

export const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <h2>
          Here's A Little Bit About <span>Me</span>
        </h2>
        <StyledCard>
          <img src={about} alt='process' />
          <p>
            I'm a developer that loves learning and strives to understand the
            best effective way to get any task completed. I work primarily in
            the Javascript ecosystem using tools such as the <span>React</span>{' '}
            library and Vue framework. Within those, I have experience using
            Typescript to help maintain consistent code, while also using
            GraphQL to fetch data from an API. I've used both CSS pre-processors
            like SASS and CSS frameworks like Tailwindcss, Bootstrap, and Ant
            Design to help make responsive applications and sites. For backend
            use, I have used PostgreSQL and MongoDB Atlas. Overall being able to
            code is important but knowing how to interact and connect with
            people is just as important. I always make sure to bring a positive
            and helpful work environment to all team members working alongside
            me, doing my absolute best to contribute to not only mine but the
            teams growth.
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
  /* flex-flow: column-reverse wrap; */

  img {
    width: 50%;
    height: auto;
    padding-right: 2rem;
  }

  p {
    padding: 0 0 0 1rem;
  }
`;
