import { DefaultTheme } from "styled-components";

const autumnTheme: DefaultTheme = {
  colors: {
    background: 'linear-gradient(#cfc6c6, #c5b6b6);',
    text: '#502004',
  }
};

const springTheme: DefaultTheme = {
  colors: {
    background: 'linear-gradient(#cacfc6, #b6c5b6)',
    text: '#21341d',
  }
};

const summerTheme: DefaultTheme = {
  colors: {
    background: 'linear-gradient(#dddfca, #edeaca)',
    text: '#34321d',
  }
};

const winterTheme: DefaultTheme = {
  colors: {
    background: 'linear-gradient(#ced6df, #b2becb)',
    text: '#3c5b62',
  }
};

export const themes = {
  autumn: autumnTheme,
  spring: springTheme,
  summer: summerTheme,
  winter: winterTheme,
};
