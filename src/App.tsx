import { FunctionComponent, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import * as Styled from './styles';
import { THEME_LS_KEY } from './styles/consts';
import { GlobalStyle } from './styles/global';
import { themes } from './styles/themes';
import { ThemeName } from './styles/types';

const App: FunctionComponent = () => {
  const [theme] = useState(() => {
    const themeName: ThemeName = localStorage.getItem(THEME_LS_KEY) as ThemeName;
    return themes[themeName] || themes.autumn;
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled.Content>
        <NavBar />
        <SideMenu />
        <Main />
      </Styled.Content>
    </ThemeProvider>
  );
};

export default App;
