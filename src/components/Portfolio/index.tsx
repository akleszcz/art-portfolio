import { FunctionComponent } from "react";
import { PortfolioProps } from "./types";
const Portfolio: FunctionComponent<PortfolioProps> = ({ data }) => {
  return <>
    {data.map((dataItem, index) => <img
      src={dataItem}
      key={dataItem}
      height="200"
      width="200"
      alt={`Placeholder ${index}`}
    /> )}
  </>;
};

export default Portfolio;
