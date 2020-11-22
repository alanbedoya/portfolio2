import React from 'react';
import styled from 'styled-components';

const footerSection = () => {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: #282828;

  h1 {
    color: #89c9b8;
  }
`;

export default footerSection;
