import { DefaultTheme } from "styled-components";

const autumnTheme: DefaultTheme = {
  boxShadow: 'rgb(41 18 18 / 34%) 0px 0px 29px 0px',
  colors: {
    background: 'linear-gradient(#c4a88f, #ca9487)',
    content: '#dabda3',
    navBar: '#e8dabf',
    sideMenu: '#e8dabf',
    text: '#4a2b24',
  }
};

const springTheme: DefaultTheme = {
  boxShadow: 'rgb(0 0 0 / 35%) 0px 0px 29px 0px',
  colors: {
    background: 'linear-gradient(#cdb496,#be9882)',
    content: '#d9d7ad',
    navBar: '#f7ecc9',
    sideMenu: '#f7ecc9',
    text: '#2f341d',
  }
};

const summerTheme: DefaultTheme = {
  boxShadow: 'rgb(0 0 0 / 21%) 0px 0px 24px',
  colors: {
    background: 'linear-gradient(#e3daae, #d0d9b7)',
    content: '#f3d9a0',
    navBar: '#ffeeb6',
    sideMenu: '#ffeeb6',
    text: '#4b4026',
  }
};

const winterTheme: DefaultTheme = {
  boxShadow: 'rgb(0 0 0 / 21%) 0px 0px 24px',
  colors: {
    background: 'linear-gradient(#b0b9d0, #8297be)',
    content: '#b7c9da',
    navBar: '#d5e2ee',
    sideMenu: '#d5e2ee',
    text: '#3c4162',
  }
};

export const themes = {
  autumn: autumnTheme,
  spring: springTheme,
  summer: summerTheme,
  winter: winterTheme,
};
