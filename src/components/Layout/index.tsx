import { FunctionComponent, useContext } from "react";
import { CONTENT_TEST_ID } from "../../consts";
import { GlobalStyle } from "../../styles/global";
import NavBar from "../NavBar";
import SideMenu from "../SideMenu";
import * as Styled from './styles';
import { Outlet } from "react-router-dom";
import { UiContext } from "../../context/ui-context";
import { themes } from "../../styles/themes";
import { ThemeProvider } from "styled-components";

const Layout: FunctionComponent = () => {
  const { themeName } = useContext(UiContext);
  const theme = themes[themeName];

  return <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Styled.Content data-testid={CONTENT_TEST_ID}>
      <NavBar />
      <SideMenu />
      <Styled.Main>
        <Outlet/>
      </Styled.Main>
    </Styled.Content>
  </ThemeProvider>;
};

export default Layout;
