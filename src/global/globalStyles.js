import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  body {
    background: #4c4c4c;
    max-width: 1920px;
    margin: auto;
    padding: auto;
  }

  button {
    font-weight: bold;
    font-size: 1.1;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #89c9b8;
    border-radius: 17px;
    background: transparent;
    color: white;
    transition: all 0.3s ease;
    &:hover{
      background-color: #89c9b8;
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
      color: #89c9b8;
    }

    p {
      padding: 3rem 0rem;
      color: #ccc;
      font-size: 1.4rem;
      line-height: 150%;
    }
`;

export default GlobalStyles;
