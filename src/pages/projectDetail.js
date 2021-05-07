import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ProjectState } from '../projectState';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

export const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);

  const Work = ({ title, description }) => {
    return (
      <StyledWork>
        <h3>{title}</h3>
        <div className='line'></div>
        <p>{description}</p>
      </StyledWork>
    );
  };

  return (
    <>
      {project && (
        <StyledDetails
          variants={pageAnimation}
          initial='hidden'
          exit='exit'
          animate='show'
          style={{ background: '#87556f' }}
        >
          <StyledHeader>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt='project1' />
          </StyledHeader>
          <StyledProjects>
            {project.work.map((work) => (
              <Work
                title={work.title}
                description={work.description}
                key={work.title}
              />
            ))}
          </StyledProjects>
          <StyledDisplay>
            <img src={project.secondImg} alt='secondImage' />
          </StyledDisplay>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)`
  color: white;
`;

const StyledHeader = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledProjects = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 5rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledWork = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #89c9b8;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

const StyledDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
