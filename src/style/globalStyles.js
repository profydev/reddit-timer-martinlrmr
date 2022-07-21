import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    border: solid 1px red;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;