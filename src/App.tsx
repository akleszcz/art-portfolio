import { FunctionComponent } from 'react';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';

const App: FunctionComponent = () => {
  return (
    <div>
      <NavBar />
      <SideMenu />
    </div>
  );
};

export default App;
