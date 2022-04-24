import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 1rem;
  grid-area: navbar;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 5px;

  &:not(.active) {
    color: ${({ theme }) => theme.colors.secondaryText};
    text-decoration: none;
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const SelectContainer = styled.span`
  align-items: center;
  background-color: transparent;
  display: flex;
  margin-left: auto;
`;
