import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Nav = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  align-items: center;
  display: flex;
  gap: ${tokens.spacing.small};
  justify-content: center;
`;

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &:not(.active) {
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  &.disabled {
    color: #bfbfbf;
    pointer-events: none;
  }
`;

export const Input = styled.input`
  text-align: center;
  font-size: ${tokens.fontSize.large};
  width: 2.5rem;
`;

