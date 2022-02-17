import { FunctionComponent, useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeProvider } from "styled-components";
import { CONTENT_TEST_ID } from "../../consts";
import { UiContext } from "../../context/ui-context";
import { GlobalStyle } from "../../styles/global";
import { themes } from "../../styles/themes";
import { tokens } from "../../styles/tokens";
import Backdrop from "../Backdrop";
import NavBar from "../NavBar";
import SideDrawer from "../SideDrawer";
import * as Styled from './styles';

const Layout: FunctionComponent = ({ children }) => {
  const { themeName } = useContext(UiContext);
  const theme = themes[themeName];
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const isLargerScreen = useMediaQuery({
    query: `(min-width: ${tokens.breakpoint.medium})`
  });

  const toggleSideDrawerOpen = (): void => {
    setIsSideDrawerOpen(prevIsSideDrawerOpen => !prevIsSideDrawerOpen);
  };

  return <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Styled.Content data-testid={CONTENT_TEST_ID}>
      <NavBar
        isLargerScreen={isLargerScreen}
        toggleSideDrawerOpen={toggleSideDrawerOpen}
      />
      <main>
        {children}
      </main>
    </Styled.Content>
    {isLargerScreen ? null :
      <>
        <Backdrop
          isVisible={isSideDrawerOpen}
          onClick={toggleSideDrawerOpen}
        />
        <SideDrawer
          isOpen={isSideDrawerOpen}
          toggleIsOpen={toggleSideDrawerOpen}
        />
      </>
    }
  </ThemeProvider>;
};

export default Layout;
