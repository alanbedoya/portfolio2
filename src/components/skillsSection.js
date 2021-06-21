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
      Here's a list of tools I've used on projects. My toolbox is always expanding. I'm more than happy to learn and implement something new to achieve the most productive and best experience for both the client, and development side of projects. The beauty with this field of work, is that there's always something to learn.
      </p>
      <StyledIconGrid>
        <ul>
          <SiJavascript size='11vh' title='JavaScript' />
          <SiReact size='11vh' title='React' />
          <SiTypescript size='11vh' title='TypeScript' />
          <SiHtml5 size='11vh' title='HTML' />
          <SiCss3 size='11vh' title='CSS' />
          <SiSass size='11vh' title='Sass' />
          <SiTailwindcss size='11vh' title='Tailwind CSS' />
          <SiGithub size='11vh' title='Github' />
          <SiNodeDotJs size='11vh' title='Node.js' />
          <SiStyledComponents size='11vh' title='Styled Components' />
          <SiGit size='11vh' title='Git' />
          <SiRedux size='11vh' title='Redux' />
          <SiFirebase size='11vh' title='Firebase' />
          <SiMongodb size='11vh' title='MongoDB' />
          <AiOutlineAntDesign size='11vh' title='Ant Design' />
          <SiApollographql size='11vh' title='Apollo' />
          <SiNetlify size='11vh' title='Netlify' />
          <SiNextDotJs size='11vh' title='Next.js' />
          <SiHeroku size='11vh' title='Heroku' />
          <SiGraphql size='11vh' title='GraphQL' />
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

  @media only screen and (min-device-width: 12em) and (max-device-width: 35.45em) {
    padding-top: 4rem;
  }
`;

const StyledIconGrid = styled.div`
  ul {
    display: grid;
    justify-items: center;
    justify-content: center;
    grid-template-columns: 15rem 15rem 15rem 15rem 15rem;
    gap: 1vw;

    svg {
      flex: 0 15%;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 12em) and (max-width: 64em) {
    ul {
      grid-template-columns: 17vw 17vw 17vw 17vw 17vw;
      grid-template-rows: 5rem 5rem 5rem 5rem;
      padding-bottom: 2rem;
    }

    svg {
      width: 6vh;
    }
  }
`;
