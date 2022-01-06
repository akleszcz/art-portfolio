import Portfolio from "../../components/Portfolio";
import withPagination from "../../hocs/withPagination";
import { LIMIT } from "./consts";

const loadData = ({ limit, offset }: {limit: number, offset: number}): string[] => {
  const integers = Array(limit).fill(0).map((_,index)=> index + offset);
  const imageUrls = integers.map(integer => `${process.env.PUBLIC_URL}/assets/portrait-${integer}.png` );
  return imageUrls;
};

const PortfolioWithPagination = withPagination(Portfolio, { loadData, limit: LIMIT });

export default PortfolioWithPagination;
