import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
    box-sizing: border-box;
    }

    body {
      background: ${({ theme }) =>theme.colors.background};
      min-height: 100vh;
      padding: 0;
    }

    html {
      font-family: sans-serif;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }
`;
