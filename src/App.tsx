import { FunctionComponent } from 'react';
import Main from './components/Main';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import * as Styled from './styles';

const App: FunctionComponent = () => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <NavBar />
        <SideMenu />
        <Main />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default App;
