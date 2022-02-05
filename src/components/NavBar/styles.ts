import { NavLink } from "react-router-dom";
import ReactSelect from "react-select";
import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 1rem;
  grid-area: navbar;
  justify-content: space-between;
  padding: ${tokens.spacing.small};
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
`;

export const Select = styled(ReactSelect)`
  text-transform: capitalize;
  width: 8rem;

  & > div {
    border-style: none;
    box-shadow: none;
  }
` as typeof ReactSelect;

export const SelectContainer = styled.span`
  align-items: center;
  display: flex;
  margin-left: auto;
`;
