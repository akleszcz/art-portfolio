import { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import * as Styled from './styles';
import { GlobalStyle } from './styles/global';
import { autumnTheme } from './styles/themes';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={autumnTheme}>
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
