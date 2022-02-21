import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import * as Styled from './styles';
import { PortfolioProps } from "./types";
const Portfolio: FunctionComponent<PortfolioProps> = ({ data }) => {
  return <Styled.Container>
    {data.map(({ altText, id, thumbnailUrl }) =>
      <Link key={id} to={id}>
        <Styled.Img
          src={thumbnailUrl}
          alt={altText}
        />
      </Link> )}
  </Styled.Container>;
};

export default Portfolio;
