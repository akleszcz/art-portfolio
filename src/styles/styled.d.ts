import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    boxShadow: string;
    colors: {
      background: string;
      content: string;
      navBar: string;
      sideMenu: string;
      text: string;
    };
  }
}
