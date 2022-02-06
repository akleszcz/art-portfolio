import { FunctionComponent } from "react";
import * as Styled from "./styles";
import ThemeSelect from "./ThemeSelect";
import { MdMenu } from "react-icons/md";
import NavLinks from "../NavLinks";
import { useMediaQuery } from 'react-responsive';
import { tokens } from "../../styles/tokens";

const NavBar: FunctionComponent<{ toggleSideDrawerOpen?: () => void} > =
 ({ toggleSideDrawerOpen }) => {
   const isLargerScreen = useMediaQuery({
     query: `(min-width: ${tokens.breakpoint.medium})`
   });

   const navigationElement = isLargerScreen ?
     <NavLinks/> :
     <Styled.MenuButton aria-label="Navigation bar toggle" onClick={toggleSideDrawerOpen}>
       <MdMenu />
     </Styled.MenuButton>;

   return (
     <Styled.Nav aria-label="Primary navigation">
       { navigationElement }
       <ThemeSelect />
     </Styled.Nav>
   );
 };

export default NavBar;
