import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #BCD3F2;
    color: #001011;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
