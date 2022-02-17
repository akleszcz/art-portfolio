import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Container = styled.div`
  display: grid;
  gap: ${tokens.spacing.small};
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;

  @media (min-width: ${tokens.breakpoint.medium}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Img = styled.img`
  width: 100%;
`;
