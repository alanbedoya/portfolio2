import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiVueDotJs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiGraphql,
  SiNodeDotJs,
  SiStyledComponents,
  SiGit,
  SiLaravel,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiBootstrap,
  SiNextDotJs,
} from 'react-icons/si';
import styled from 'styled-components';
import { StyledLayout } from '../styles';

const SkillsSection = () => {
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
          <SiJavascript size='17vh' />
          <SiReact size='17vh' />
          <SiVueDotJs size='17vh' />
          <SiTypescript size='17vh' />
          <SiHtml5 size='17vh' />
          <SiCss3 size='17vh' />
          <SiSass size='17vh' />
          <SiTailwindcss size='17vh' />
          <SiGraphql size='17vh' />
          <SiNodeDotJs size='17vh' />
          <SiStyledComponents size='17vh' />
          <SiGit size='17vh' />
          <SiLaravel size='17vh' />
          <SiFirebase size='17vh' />
          <SiMongodb size='17vh' />
          <SiPostgresql size='17vh' />
          <SiBootstrap size='17vh' />
          <SiNextDotJs size='17vh' />
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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    svg {
      margin-bottom: 2rem;
      margin-left: 2rem;
    }
  }
`;

export default SkillsSection;
