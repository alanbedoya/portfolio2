import React from 'react';
import styled from 'styled-components';
import { Scroll } from '../components';
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

export const MyWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial='hidden'
      exit='exit'
      animate='show'
      style={{ background: '#b67171' }}
    >
      <StyledProject>
        <motion.h2 variants={fadeAnimation}>Project 1</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <StyledContainer>
          <motion.img variants={photoAnimation} src={athlete} alt='athlete' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            tellus molestie nunc non blandit massa enim. Sagittis orci a
            scelerisque purus semper eget duis at tellus. Elementum eu facilisis
            sed odio morbi quis commodo. Pellentesque elit eget gravida cum
            sociis natoque penatibus et. Proin sagittis nisl rhoncus mattis.
            Urna condimentum mattis pellentesque id nibh tortor id. Nisl nisi
            scelerisque eu ultrices vitae auctor eu augue ut. Consequat ac felis
            donec et odio. Placerat vestibulum lectus mauris ultrices eros in
            cursus turpis massa. Eget mi proin sed libero enim sed faucibus.
            Vestibulum rhoncus est pellentesque elit. Morbi tristique senectus
            et netus et malesuada fames ac. Ultrices sagittis orci a scelerisque
            purus semper eget duis. Nisl rhoncus mattis rhoncus urna neque
            viverra justo. Feugiat scelerisque varius morbi enim nunc.
          </p>
        </StyledContainer>
        <button className='button1'>Live Site</button>
        <button className='button2'>Github</button>
      </StyledProject>
      <StyledProject>
        <h2>Project 2</h2>
        <div className='line'></div>
        <StyledContainer>
          <img src={racer} alt='racer' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            tellus molestie nunc non blandit massa enim. Sagittis orci a
            scelerisque purus semper eget duis at tellus. Elementum eu facilisis
            sed odio morbi quis commodo. Pellentesque elit eget gravida cum
            sociis natoque penatibus et. Proin sagittis nisl rhoncus mattis.
            Urna condimentum mattis pellentesque id nibh tortor id. Nisl nisi
            scelerisque eu ultrices vitae auctor eu augue ut. Consequat ac felis
            donec et odio. Placerat vestibulum lectus mauris ultrices eros in
            cursus turpis massa. Eget mi proin sed libero enim sed faucibus.
            Vestibulum rhoncus est pellentesque elit. Morbi tristique senectus
            et netus et malesuada fames ac. Ultrices sagittis orci a scelerisque
            purus semper eget duis. Nisl rhoncus mattis rhoncus urna neque
            viverra justo. Feugiat scelerisque varius morbi enim nunc.
          </p>
        </StyledContainer>
        <button className='button1'>Live Site</button>
        <button className='button2'>Github</button>
      </StyledProject>
      <StyledProject>
        <h2>Project 3</h2>
        <div className='line'></div>
        <StyledContainer>
          <img src={coffee} alt='coffee' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            tellus molestie nunc non blandit massa enim. Sagittis orci a
            scelerisque purus semper eget duis at tellus. Elementum eu facilisis
            sed odio morbi quis commodo. Pellentesque elit eget gravida cum
            sociis natoque penatibus et. Proin sagittis nisl rhoncus mattis.
            Urna condimentum mattis pellentesque id nibh tortor id. Nisl nisi
            scelerisque eu ultrices vitae auctor eu augue ut. Consequat ac felis
            donec et odio. Placerat vestibulum lectus mauris ultrices eros in
            cursus turpis massa. Eget mi proin sed libero enim sed faucibus.
            Vestibulum rhoncus est pellentesque elit. Morbi tristique senectus
            et netus et malesuada fames ac. Ultrices sagittis orci a scelerisque
            purus semper eget duis. Nisl rhoncus mattis rhoncus urna neque
            viverra justo. Feugiat scelerisque varius morbi enim nunc.
          </p>
        </StyledContainer>
        <button className='button1'>Live Site</button>
        <button className='button2'>Github</button>
      </StyledProject>
      <Scroll />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  overflow: hidden;
  padding: 5rem 10rem;
  align-items: center;
  justify-content: center;

  h2 {
    padding: 1rem 0;
  }
`;

const StyledProject = styled.div`
  padding-bottom: 5rem;
  margin-bottom: 10rem;
  border-style: solid;
  border-width: medium;
  box-shadow: 10px 10px #33313b;

  .line {
    height: 0.5rem;
    background: #89c9b8;
    margin-bottom: 3rem;
  }

  .button1 {
    margin: 0 2rem 0 45rem;
  }

  @media (min-width: 1441px) {
    .button1 {
      margin-left: 55rem;
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  padding: 0 2vh;

  img {
    width: 55%;
    height: 41rem;
    object-fit: cover;
  }

  p {
    padding-top: 0;
    padding-left: 2vh;
  }

  @media (min-width: 1441px) {
    flex-flow: row-wrap;

    img {
      width: 80%;
    }
  }
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
