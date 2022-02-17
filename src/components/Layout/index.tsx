import { FunctionComponent, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CONTENT_TEST_ID } from "../../consts";
import { UiContext } from "../../context/ui-context";
import { GlobalStyle } from "../../styles/global";
import { themes } from "../../styles/themes";
import Backdrop from "../Backdrop";
import NavBar from "../NavBar";
import SideDrawer from "../SideDrawer";
import SideMenu from "../SideMenu";
import * as Styled from './styles';

const Layout: FunctionComponent = ({ children }) => {
  const { themeName } = useContext(UiContext);
  const theme = themes[themeName];
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const toggleSideDrawerOpen = (): void => {
    setIsSideDrawerOpen(prevIsSideDrawerOpen => !prevIsSideDrawerOpen);
  };

  return <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Styled.Content data-testid={CONTENT_TEST_ID}>
      <NavBar toggleSideDrawerOpen={toggleSideDrawerOpen}/>
      <Routes>
        <Route path="/portfolio/*" element={<SideMenu/>}/>
        <Route path="/*" element={null} />
      </Routes>
      <main>
        {children}
      </main>
    </Styled.Content>
    <Backdrop isVisible={isSideDrawerOpen}/>
    <SideDrawer isOpen={isSideDrawerOpen} toggleIsOpen={toggleSideDrawerOpen}/>
  </ThemeProvider>;
};

export default Layout;
