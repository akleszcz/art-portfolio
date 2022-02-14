import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Nav = styled.nav`
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${tokens.spacing.small};
  padding: ${tokens.spacing.large};
  position: fixed;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  width: 40%;

  &.open {
    transform: translateX(0);
    box-shadow: 3px 0px 10px 5px rgb(0 0 0 / 20%);
  }

  @media (min-width: ${tokens.breakpoint.medium}) {
    display: none;
  }
`;
