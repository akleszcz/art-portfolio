import styled from "styled-components";
import ReactSelect from "react-select";
import { OptionType } from "../../types";

export const Nav = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navBar};
  display: flex;
  gap: 1rem;
  grid-area: navbar;
  justify-content: space-between;
`;

export const Select = styled(ReactSelect)<OptionType>`
  margin-left: auto;
  text-transform: capitalize;

  & > div {
    background-color: ${({ theme }) => theme.colors.navBar};
    border-style: none;
  }
` as typeof ReactSelect;
