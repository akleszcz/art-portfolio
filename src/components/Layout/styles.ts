import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Content = styled.div`
  box-shadow: 'rgb(0 0 0 / 35%) 0px 0px 29px 0px';
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  gap: ${tokens.spacing.large};
  grid-template-areas:
    "navbar"
    "main";
  grid-template-rows: min-content auto;
  margin: 0 auto;
  max-width: 900px;
  padding: ${tokens.spacing.large};
`;

