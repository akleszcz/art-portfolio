import { FunctionComponent } from "react";
import * as Styled from './styles';
import { PortfolioProps } from "./types";
const Portfolio: FunctionComponent<PortfolioProps> = ({ data }) => {
  return <Styled.Container>
    {data.map((dataItem, index) => <Styled.Img
      src={dataItem}
      key={dataItem}
      alt={`Placeholder ${index}`}
    /> )}
  </Styled.Container>;
};

export default Portfolio;
