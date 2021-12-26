import { FunctionComponent } from "react";
import * as Styled from "./styles";
import ThemeSelect from "./ThemeSelect";

const NavBar: FunctionComponent = () => {
  return <Styled.Nav aria-label="Primary navigation">
    <span>Home</span>
    <span>Portfolio</span>
    <span>About</span>
    <span>Contact</span>
    <ThemeSelect />
  </Styled.Nav>;
};

export default NavBar;
