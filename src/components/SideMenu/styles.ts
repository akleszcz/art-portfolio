import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${props => props.theme.colors.sideMenu};
  grid-area: sidemenu;
  & ul {
    list-style-type: none;
    padding: 0;
  }
`;
