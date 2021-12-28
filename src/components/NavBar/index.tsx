import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import * as Styled from "./styles";
import ThemeSelect from "./ThemeSelect";

const NavBar: FunctionComponent = () => {
  return <Styled.Nav aria-label="Primary navigation">
    <NavLink to="/">Portfolio</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/Contact">Contact</NavLink>
    <ThemeSelect />
  </Styled.Nav>;
};

export default NavBar;
