import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Nav = styled.nav`
  grid-area: sidemenu;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;

  @media (min-width: ${tokens.breakpoint.medium}) {
    display: block;
  }
`;
