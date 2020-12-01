import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
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
        <input type='text' name='name' required />
        <label for='name' class='label-name'>
          <span class='content-name'>Name</span>
        </label>
        <label>Email</label>
        <input type='email' name='email' />
        <label>Subject</label>
        <input type='text' name='subject' />
        <label>Message</label>
        <textarea name='message' />
        <button type='submit'>Send</button>
      </form>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 10rem;
  color: white;
  padding-bottom: 500px;

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
      padding: 2rem;
    }

    textarea {
      padding: 4rem;
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
