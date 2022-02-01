import { FunctionComponent } from "react";
import * as Styled from "./styles";

export const NavLinks: FunctionComponent = () => {
  return (
    <>
      <Styled.Link to="/">Home</Styled.Link>
      <Styled.Link to="/portfolio">Portfolio</Styled.Link>
      <Styled.Link to="/about">About</Styled.Link>
      <Styled.Link to="/contact">Contact</Styled.Link>
    </>
  );
};
