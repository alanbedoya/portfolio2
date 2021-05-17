import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiGithub,
  SiNodeDotJs,
  SiRedux,
  SiStyledComponents,
  SiGit,
  SiFirebase,
  SiNetlify,
  SiApollographql,
  SiMongodb,
  SiNextDotJs,
  SiHeroku,
  SiGraphql,
} from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import styled from 'styled-components';
import { StyledLayout } from '../styles';

export const SkillsSection = () => {
  return (
    <StyledSkills>
      <h2>
        The Skills & <br />
        Tools I <span>Know</span>
      </h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
        praesentium, asperiores doloribus dolorum fugiat incidunt quasi nam
        neque officia consequatur error distinctio, reiciendis saepe hic
        sapiente molestiae rerum odio dicta minima quae, repellat beatae
        reprehenderit quidem. Dolores placeat ducimus blanditiis possimus libero
        cumque ipsa rerum quas nostrum facere, ex harum.
      </p>
      <StyledIconGrid>
        <ul>
          <SiJavascript size='11vh' />
          <SiReact size='11vh' />
          <SiTypescript size='11vh' />
          <SiHtml5 size='11vh' />
          <SiCss3 size='11vh' />
          <SiSass size='11vh' />
          <SiTailwindcss size='11vh' />
          <SiGithub size='11vh' />
          <SiNodeDotJs size='11vh' />
          <SiStyledComponents size='11vh' />
          <SiGit size='11vh' />
          <SiRedux size='11vh' />
          <SiFirebase size='11vh' />
          <SiMongodb size='11vh' />
          <AiOutlineAntDesign size='11vh' />
          <SiApollographql size='11vh' />
          <SiNetlify size='11vh' />
          <SiNextDotJs size='11vh' />
          <SiHeroku size='11vh' />
          <SiGraphql size='11vh' />
        </ul>
      </StyledIconGrid>
    </StyledSkills>
  );
};

const StyledSkills = styled(StyledLayout)`
  display: block;

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
`;

const StyledIconGrid = styled.div`
  ul {
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: 16rem 16rem 16rem 16rem 16rem;
    grid-gap: 1rem;

    svg {
      flex: 0 15%;
      margin-bottom: 2rem;

      /* &:nth-last-child(1) {
        grid-column: 4 / span 1;
      }

      &:nth-last-child(2) {
        grid-column: 3 / span 1;
      }

      &:nth-last-child(3) {
        grid-column: 2 / span 1;
      } */
    }
  }

  @media (max-width: 53em) {
    ul {
      grid-template-columns: 3rem 3rem 3rem 3rem 3rem;
      grid-gap: 0.8rem;
    }

    svg {
      width: 8vh;
      height: 8vh;
    }
  }
`;
