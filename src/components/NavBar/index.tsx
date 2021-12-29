import { FunctionComponent } from "react";
import * as Styled from "./styles";
import ThemeSelect from "./ThemeSelect";

const NavBar: FunctionComponent = () => {
  return <Styled.Nav aria-label="Primary navigation">
    <Styled.NavigationLink to="/">Portfolio</Styled.NavigationLink>
    <Styled.NavigationLink to="/about">About</Styled.NavigationLink>
    <Styled.NavigationLink to="/Contact">Contact</Styled.NavigationLink>
    <ThemeSelect />
  </Styled.Nav>;
};

export default NavBar;
