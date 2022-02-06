import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Content = styled.div`
  box-shadow: 'rgb(0 0 0 / 35%) 0px 0px 29px 0px';
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  gap: ${tokens.spacing.small};
  grid-template-areas:
    "navbar"
    "sidemenu"
    "main";
  grid-template-rows: auto 1fr;
  min-height: calc(100vh - 2 * ${tokens.spacing.xLarge});
  padding: ${tokens.spacing.large};

  @media (min-width: ${tokens.breakpoint.medium}) {
    gap: ${tokens.spacing.large};
    grid-template-areas:
    "navbar navbar"
    "sidemenu main";
    grid-template-columns: auto 1fr;
  }
`;

