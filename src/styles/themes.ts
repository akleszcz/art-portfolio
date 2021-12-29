import { DefaultTheme } from "styled-components";

const autumnTheme: DefaultTheme = {
  colors: {
    background: 'linear-gradient(#cfc6c6, #c5b6b6);',
    secondaryText: '#a17f7f',
    text: '#3b0e03',
  }
};

const springTheme: DefaultTheme = {
  colors: {
    background: 'linear-gradient(#cacfc6, #b6c5b6)',
    secondaryText: '#7fa185',
    text: '#033b27',
  }
};

const summerTheme: DefaultTheme = {
  colors: {
    background: 'linear-gradient(#edeaca, #dddfca)',
    secondaryText: '#9da17f',
    text: '#3b3803',
  }
};

const winterTheme: DefaultTheme = {
  colors: {
    background: 'linear-gradient(#ced6df, #b2becb)',
    secondaryText: '#7f92a1',
    text: '#03233b',
  }
};

export const themes = {
  autumn: autumnTheme,
  spring: springTheme,
  summer: summerTheme,
  winter: winterTheme,
};
