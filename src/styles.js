import styled from 'styled-components';

export const StyledLayout = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  color: white;

  @media (max-width: 53em) {
    padding: 5rem 1rem 2rem 1rem;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;

  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledHidden = styled.div`
  overflow: hidden;
`;
