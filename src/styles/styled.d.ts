import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      secondaryText: string;
      selectBackground: string;
      selectActiveBackground: string;
      text: string;
    };
  }
}
