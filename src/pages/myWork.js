import React from 'react';
import styled from 'styled-components';
import { Scroll } from '../components';
import gamer from '../assets/img/gamer.png';
import chatter from '../assets/img/chatter.png';
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
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
        <motion.h2 variants={fadeAnimation}>Gamer</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <StyledContainer>
          <motion.img variants={photoAnimation} src={gamer} alt='athlete' />
          <motion.p variants={fadeAnimation}>
            Gamer is a game searching app at it's core. It shows users right
            away 3 categories. Upcoming games, popular games, and new games.
            They are able to scroll down and view the constely updated
            categories and easily scroll back up to the top by clicking the
            scroll to top button. If a user want's to know more about a specific
            game, they can click on the card and it while do an animation to
            expand and show more details about it. The user will be able to see
            the title, what platforms the game is on, the rating of the game, a
            description, and lastly a image carousel showing all screenshots of
            the game. All of this is being pull from the 3rd party api Rawg.io.
            A user can search up any game title and anything related to their
            search will appear, they can then click on the card and view all the
            deatils about it. It was built using: <span>React</span>,{' '}
            <span>Sass</span>, <span>Axios</span>, <span>Frammer Motion</span>,{' '}
            <span>Redux</span>, and <span>Redux Thunk</span>.
            <br />
            <StyledButtons>
              <a
                href='https://updated-gamer.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='button1'>Live Site</button>
              </a>
              <a
                href='https://github.com/alanbedoya/gamer'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='button2'>Github</button>
              </a>
            </StyledButtons>
          </motion.p>
        </StyledContainer>
      </StyledProject>
      <StyledProject>
        <h2>Chatter</h2>
        <div className='line'></div>
        <StyledContainer>
          <img src={chatter} alt='racer' />
          <p>
            Chatter is a live messaging app. A user can login in with their
            account from the 4 options listed: Google, Github, Twitter, and
            Facebook. I was able to do this with Firebase authenication and
            giving the providers OAuth authorization. From there a user can view
            their current conversation, start a new one, invite other users,
            share photos, and delete a conversation if their the creator of it.
            It was built using: <span>React</span>, <span>Axios</span>,{' '}
            <span>Firebase</span>, <span>Tailwind CSS</span>, and{' '}
            <span>Chat Engine</span>.
            <br />
            <StyledButtons>
              <a
                href='https://chatter-messenger.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='button1'>Live Site</button>
              </a>
              <a
                href='https://github.com/alanbedoya/chatter'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='button2'>Github</button>
              </a>
            </StyledButtons>
          </p>
        </StyledContainer>
      </StyledProject>
      {/* <StyledProject>
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
            <br />
            <StyledButtons>
              <button className='button1'>Live Site</button>
              <button className='button2'>Github</button>
            </StyledButtons>
          </p>
        </StyledContainer>
      </StyledProject> */}
      <Scroll />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  overflow: hidden;
  padding: 5rem 12rem;
  align-items: center;
  justify-content: center;

  h2 {
    padding: 1rem 0;
  }

  @media (min-width: 12em) and (max-width: 64em) {
    padding: 7rem 1rem 0 1rem;
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

  @media (min-width: 12em) and (max-width: 35.45em) {
    margin-bottom: 7rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2vh;

  img {
    width: 100%;
    height: 39rem;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  p {
    padding: 1rem 0 0 0;
  }

  @media (min-width: 12em) and (max-width: 64em) {
    img {
      width: 100%;
      height: 70%;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1rem;
      padding: 0;
    }
  }

  @media (min-width: 35.5em) and (max-width: 64em) {
    flex-direction: column;

    img {
      width: 100%;
      height: 40%;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 106.25em) {
    img {
      height: 40%;
    }
  }
`;

const StyledButtons = styled.span`
  display: flex;
  justify-content: center;

  button {
    margin-top: 2rem;
    &.button2 {
      margin-left: 1rem;
    }
  }

  @media (max-width: 35.45em) {
    button {
      padding: 1rem 1.6rem;
      &.button2 {
        margin-left: 0.5rem;
      }
    }
  }

  @media (max-width: 17em) {
    flex-flow: column wrap;
  }
`;
