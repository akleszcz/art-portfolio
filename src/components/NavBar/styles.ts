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

export const Select = styled(ReactSelect)`
  text-transform: capitalize;
  width: 8rem;

  & > div {
    border-style: none;
  }
` as typeof ReactSelect;

export const SelectContainer = styled.span`
  align-items: center;
  display: flex;
  margin-left: auto;
`;
