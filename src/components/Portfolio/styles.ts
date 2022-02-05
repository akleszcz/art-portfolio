import styled from "styled-components";
import { tokens } from "../../styles/tokens";

export const Container = styled.div`
  display: grid;
  gap: ${tokens.spacing.small};
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
`;
