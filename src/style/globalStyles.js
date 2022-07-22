import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  h2 {
    font-family: 'Bitter';
    font-weight: 400;
    font-size: 24px;
    color ${(props) => props.theme.color.dark};
  }
`;

export default GlobalStyle;
