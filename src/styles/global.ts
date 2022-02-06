import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { tokens } from './tokens';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
    box-sizing: border-box;
    }

    body {
      background: none;
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

    @media (min-width: ${tokens.breakpoint.medium}) {
      body {
        background: ${({ theme }) =>theme.colors.background};
        padding: ${tokens.spacing.xLarge};
      }
    }
`;
