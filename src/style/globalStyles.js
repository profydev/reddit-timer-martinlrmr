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

  h1 {
    font-family: ${(props) => props.theme.font.family.headline};
    font-weight: 400;
    font-size: 2.375rem;
    color: ${(props) => props.theme.color.dark};
  }

  a {
    font-family: 'Montserrat';
    color: ${(props) => props.theme.color.midDark};
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
