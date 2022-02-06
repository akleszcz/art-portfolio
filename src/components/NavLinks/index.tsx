import { FunctionComponent } from "react";
import * as Styled from "../NavBar/styles";

const NavLinks: FunctionComponent<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <>
      <Styled.Link to="/" onClick={onClick}>Home</Styled.Link>
      <Styled.Link to="/portfolio" onClick={onClick}>Portfolio</Styled.Link>
      <Styled.Link to="/about" onClick={onClick}>About</Styled.Link>
      <Styled.Link to="/contact" onClick={onClick}>Contact</Styled.Link>
    </>
  );
};

export default NavLinks;
