import React from 'react';
import portrait from '../img/portrait.jpg';

const aboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>Welcome! I'm </h2>
          </div>
          <div className='hide'>
            <h2>
              <span>Alan</span> Bedoya
            </h2>
          </div>
          <div className='hide'>
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Lets colobarate together to create something beautiful and amazing!
        </p>
        <button>Contact Me</button>
      </div>
      <div className='image'>
        <img src={portrait} alt='Alan Bedoya' />
      </div>
    </div>
  );
};

export default aboutSection;
