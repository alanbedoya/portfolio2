import React from 'react';
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
      <div className='iconGrid'>
        <div className='icon'></div>
        <div className='icon'></div>
        <div className='icon'></div>
        <div className='icon'></div>
        <div className='icon'></div>
        <div className='icon'></div>
        <div className='icon'></div>
        <div className='icon'></div>
      </div>
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

export default SkillsSection;
