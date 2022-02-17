import { FunctionComponent } from "react";
import { MdMenu } from "react-icons/md";
import NavLinks from "../NavLinks";
import * as Styled from "./styles";
import ThemeSelect from "./ThemeSelect";

const NavBar: FunctionComponent<{ isLargerScreen?: boolean, toggleSideDrawerOpen?: () => void} > =
 ({ isLargerScreen = true, toggleSideDrawerOpen }) => {
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
