import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import Scroll from '../components/scroll';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const contactMe = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_jge6zqn',
        'template_r2pup3n',
        e.target,
        'user_IHkaIHKa0LQ3fvjkPzRC5'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <StyledContact
      variants={pageAnimation}
      initial='hidden'
      exit='exit'
      animate='show'
      style={{ background: '#ffc5a1' }}
    >
      <div className='fieldLeft'>
        <h2>
          Sweet! Let's <br /> <span>Connect</span> & start <br />
          collabrating.
        </h2>
      </div>
      <form className='contact-form' onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Name' required />
        <input type='email' name='email' placeholder='Email' />
        <input type='text' name='subject' placeholder='Subject' />
        <textarea name='message' placeholder='Message' />
        <button type='submit'>Send</button>
      </form>
      <Scroll />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  min-height: 85.2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 10rem;
  color: white;
  padding-bottom: 500px;

  @media (max-width: 1440px) {
    min-height: 83vh;
  }

  .fieldLeft {
    height: 40px;
    flex-grow: 1;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 40px;
    position: relative;

    input {
      padding: 1rem;

      ::-webkit-input-placeholder {
        color: #cccccc;
      }
    }

    textarea {
      padding: 4rem;

      ::-webkit-input-placeholder {
        color: #cccccc;
      }
      :focus {
        outline: none;
        background-color: grey;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40%;
      margin-top: 2vh;
      margin-left: 19vh;
    }
  }
`;

export default contactMe;
