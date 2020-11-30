import React from 'react';
import styled from 'styled-components';
import Scroll from '../components/scroll';
import { Link } from 'react-router-dom';
import athlete from '../assets/img/athlete-small.png';
import racer from '../assets/img/theracer-small.png';
import coffee from '../assets/img/coffee.jpg';
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
  // loadingContianer,
  // loadingAnimation,
} from '../animation';

const myWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial='hidden'
      exit='exit'
      animate='show'
      style={{ background: '#dcd6f7' }}
    >
      {/* <motion.div variants={loadingContianer}>
        <StyledLoading1 variants={loadingAnimation}></StyledLoading1>
        <StyledLoading2 variants={loadingAnimation}></StyledLoading2>
        <StyledLoading3 variants={loadingAnimation}></StyledLoading3>
        <StyledLoading4 variants={loadingAnimation}></StyledLoading4>
      </motion.div> */}
      <StyledProject>
        <motion.h2 variants={fadeAnimation}>Project 1</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='/work/project1'>
          <StyledHide>
            <motion.img variants={photoAnimation} src={athlete} alt='athlete' />
          </StyledHide>
        </Link>
      </StyledProject>
      <StyledProject>
        <h2>Project 2</h2>
        <div className='line'></div>
        <Link to='/work/project2'>
          <img src={racer} alt='racer' />
        </Link>
      </StyledProject>
      <StyledProject>
        <h2>Project 3</h2>
        <div className='line'></div>
        <Link to='/work/project3'>
          <img src={coffee} alt='coffee' />
        </Link>
      </StyledProject>
      <Scroll />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  overflow: hidden;
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledProject = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #89c9b8;
    margin-bottom: 3rem;
  }

  img {
    width: 75rem;
    height: 45rem;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

// const StyledLoading1 = styled(motion.div)`
//   position: fixed;
//   left: 0;
//   right: 0;
//   margin-left: auto;
//   margin-right: auto;
//   top: 14%;
//   height: 100vh;
//   background-color: #fffebf;
//   z-index: 2;
// `;

// const StyledLoading2 = styled(StyledLoading1)`
//   background: #ff8efb;
// `;

// const StyledLoading3 = styled(StyledLoading1)`
//   background: #8ed2ff;
// `;

// const StyledLoading4 = styled(StyledLoading1)`
//   background: #8effa0;
// `;

export default myWork;
