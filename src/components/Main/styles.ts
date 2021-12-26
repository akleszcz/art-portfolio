import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.small};
  grid-area: main;
`;
