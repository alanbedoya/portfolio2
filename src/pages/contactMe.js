import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { Scroll } from '../components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import { useAlert } from 'react-alert';

export const ContactMe = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const alert = useAlert();

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
        () => {
          alert.success(`Sent - Thanks for reaching out!`);
        },
        () => {
          alert.error(`Error - Sorry, try again later.`);
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
        <StyledButton>
          <button type='submit'> Send </button>
        </StyledButton>
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
  padding: 3rem 10rem;
  color: white;
  padding-bottom: 12rem;

  /* .fieldLeft {
    flex-flow: row wrap;
  } */

  .contact-form {
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: auto;
    position: relative;

    input {
      padding: 1rem;
      border: solid 1px #b3aca7;
      border-bottom: none;

      ::-webkit-input-placeholder {
        color: #cccccc;
      }

      :focus {
        outline: none;
        background-color: #f4f4f2;
      }
    }

    textarea {
      padding: 1rem;
      height: 12rem;
      text-align: left;
      border: solid 1px #b3aca7;
      border-bottom: none;

      ::-webkit-input-placeholder {
        color: #cccccc;
      }
      :focus {
        outline: none;
        background-color: #f4f4f2;
      }
    }

    /* button {
      font-size: 1rem;
      justify-content: center;
      align-items: center;
      width: 25%;
      margin-top: 2vh;
      margin-left: 24vh;
      margin-bottom: 2vh;
    } */
  }

  @media (max-width: 53em) {
    flex-flow: column wrap;
    padding: 7rem 1rem 6rem 1rem;

    .contact-form {
      margin-top: 4rem;
      width: 88%;
    }
  }

  @media (max-width: 90em) {
    /* min-height: 80vh; */
    /* padding-bottom: 138px; */
  }
`;

const StyledButton = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
