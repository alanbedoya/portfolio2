import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  body {
    background: #1b1b1b;
    max-width: 1900px;
    margin: auto;
    padding: auto;
  }

  button {
    font-weight: bold;
    font-size: 1.1;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    border-radius: 17px;
    background: transparent;
    color: white;
    transition: all 0.3s ease;
    &:hover{
      background-color: #23d997;
      color: white; 
    }
  }

  h2 {
      font-weight: lighter;
      font-size: 4rem;
    }

    h3 {
      color: white;
    }

    h4 {
      font-weight: bold;
      font-size: 2rem;
    }

    a {
      font-size: 1.1rem;
    }

    span {
      font-weight: bold;
      color: #23d997;
    }

    p {
      padding: 3rem 0rem;
      color: #ccc;
      font-size: 1.4rem;
      line-height: 150%;
    }
`;

export default GlobalStyles;
