import { FunctionComponent, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import { UiContext } from './context/ui-context';
import * as Styled from './styles';
import { GlobalStyle } from './styles/global';
import { themes } from './styles/themes';

const App: FunctionComponent = () => {
  const { themeName } = useContext(UiContext);
  const theme = themes[themeName];
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled.Content data-testid="content">
        <NavBar />
        <SideMenu />
        <Main />
      </Styled.Content>
    </ThemeProvider>
  );
};

export default App;
