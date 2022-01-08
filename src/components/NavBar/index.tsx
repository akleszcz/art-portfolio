import { FunctionComponent } from "react";
import * as Styled from "./styles";
import ThemeSelect from "./ThemeSelect";

const NavBar: FunctionComponent = () => {
  return <Styled.Nav aria-label="Primary navigation">
    <Styled.Link to="/">Home</Styled.Link>
    <Styled.Link to="/portfolio">Portfolio</Styled.Link>
    <Styled.Link to="/about">About</Styled.Link>
    <Styled.Link to="/contact">Contact</Styled.Link>
    <ThemeSelect />
  </Styled.Nav>;
};

export default NavBar;
