import React from 'react';
import portrait from '../assets/img/portrait.jpg';
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
          <img className='backgroundCircle' src={portrait} alt='Alan Bedoya' />
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
  justify-content: center;
  align-items: center;

  img {
    width: 39%;
    padding-right: 2rem;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    &.backgroundCircle {
      background: #ffaaa7;
    }
  }

  p {
    padding-left: 1rem;
  }

  @media screen and (min-width: 12em) and (max-width: 64em) {
    align-items: center;
    flex-flow: column wrap;

    P {
      padding-left: 0;
    }

    img {
      width: 65%;
      height: 100%;
      margin-bottom: 2rem;
    }
  }
`;
