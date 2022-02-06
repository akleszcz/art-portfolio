import { FunctionComponent } from "react";
import NavLinks from "../NavLinks";
import * as Styled from "./styles";

const SideDrawer: FunctionComponent<{ isOpen: boolean, toggleIsOpen: () => void }> =
({ isOpen, toggleIsOpen }) => {
  return <Styled.Nav className={isOpen ? 'open': ''}>
    <NavLinks onClick={toggleIsOpen}/>
  </Styled.Nav>;
};

export default SideDrawer;
