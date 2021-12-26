import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Nav = styled.nav`
  grid-area: sidemenu;
  padding: ${tokens.spacing.small};

  & ul {
    list-style-type: none;
    padding: 0;
  }
`;
