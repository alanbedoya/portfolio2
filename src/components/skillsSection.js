import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiGraphql,
  SiNodeDotJs,
  SiStyledComponents,
  SiGit,
  SiFirebase,
  SiBootstrap,
  SiMongodb,
  SiNextDotJs,
} from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import styled from 'styled-components';
import { StyledLayout } from '../styles';

export const SkillsSection = () => {
  return (
    <StyledSkills>
      <h2>
        The Skill & <br />
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
          <SiJavascript size='15vh' />
          <SiReact size='15vh' />
          <SiTypescript size='15vh' />
          <SiHtml5 size='15vh' />
          <SiCss3 size='15vh' />
          <SiSass size='15vh' />
          <SiTailwindcss size='15vh' />
          <SiGraphql size='15vh' />
          <SiNodeDotJs size='15vh' />
          <SiStyledComponents size='15vh' />
          <SiGit size='15vh' />
          <SiFirebase size='15vh' />
          <SiMongodb size='15vh' />
          <AiOutlineAntDesign size='15vh' />
          <SiBootstrap size='15vh' />
          <SiNextDotJs size='15vh' />
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

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

const StyledIconGrid = styled.div`
  ul {
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: 16em 16em 16em 16em;
    grid-gap: 1em;
    svg {
      flex: 0 15%;
      margin-bottom: 2rem;
    }
  }
`;
