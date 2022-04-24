import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  colors: {
    background: '#191919',
    secondaryText: '#bca5a5',
    selectBackground: '#8b5c5c',
    selectActiveBackground: '#76676799',
    text: '#f5f5f5',
  }
};

const lightTheme: DefaultTheme = {
  colors: {
    background: '#f5f5f5',
    secondaryText: '#766767',
    selectBackground: '#d0b7b7',
    selectActiveBackground: '#d0b7b78a',
    text: '#191919',
  }
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};
