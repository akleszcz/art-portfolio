import ReactSelect from "react-select";
import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navBar};
  display: flex;
  gap: 1rem;
  grid-area: navbar;
  justify-content: space-between;
`;

export const Select = styled(ReactSelect)`
  text-transform: capitalize;

  & > div {
    background-color: ${({ theme }) => theme.colors.navBar};
    border-style: none;
  }
` as typeof ReactSelect;

export const SelectContainer = styled.span`
  align-items: center;
  display: flex;
  margin-left: auto;
`;
