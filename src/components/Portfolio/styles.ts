import styled from "styled-components";
import { tokens } from "../../styles/tokens";

const imageSize = '250px';

export const Container = styled.div`
  display: grid;
  gap: ${tokens.spacing.small};
  grid-template-columns: repeat(3, ${imageSize});
  justify-content: center;
`;

export const Img = styled.img`
  height: ${imageSize};
  width: ${imageSize};
`;
