import { FunctionComponent, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CONTENT_TEST_ID } from "../../consts";
import { UiContext } from "../../context/ui-context";
import { GlobalStyle } from "../../styles/global";
import { themes } from "../../styles/themes";
import NavBar from "../NavBar";
import SideMenu from "../SideMenu";
import * as Styled from './styles';

const Layout: FunctionComponent = ({ children }) => {
  const { themeName } = useContext(UiContext);
  const theme = themes[themeName];

  return <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Styled.Content data-testid={CONTENT_TEST_ID}>
      <NavBar />
      <Routes>
        <Route path="/portfolio/*" element={<SideMenu/>}/>
        <Route path="/*" element={null} />
      </Routes>
      <Styled.Main>
        {children}
      </Styled.Main>
    </Styled.Content>
  </ThemeProvider>;
};

export default Layout;
