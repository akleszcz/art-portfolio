import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { tokens } from './tokens';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
    box-sizing: border-box;
    }

    body {
      background: ${({ theme }) =>theme.colors.background};
      min-height: 100vh;
      padding: ${tokens.spacing.large};
    }

    html {
      font-family: sans-serif;
    }
`;
