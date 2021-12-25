import { FunctionComponent, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import { UiContext } from './context/ui-context';
import * as Styled from './styles';
import { GlobalStyle } from './styles/global';

const App: FunctionComponent = () => {
  const {theme} = useContext(UiContext);
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
