import Portfolio from "../../components/Portfolio";
import withPagination from "../../hocs/withPagination";
import { LIMIT } from "./consts";

const fetchData = async ({ limit, offset }: {limit: number, offset: number}): Promise<{ totalCount: number, data: string[] }> => {
  const totalCount = 28; // normally it would be returned by a server
  const pageNumber = Math.ceil(offset / limit);
  const quotient = Math.floor(totalCount / limit);
  const remainder = totalCount % limit;
  const dataCount = pageNumber <= quotient ? limit : remainder;
  const integers = Array(dataCount).fill(0).map((_,index)=> index + offset); // normally it would be returned by a server 
  const imageUrls = integers.map(integer => `${process.env.PUBLIC_URL}/assets/portrait-${integer}.png` );
  return Promise.resolve({ data: imageUrls, totalCount });
};

const PortfolioWithPagination = withPagination(Portfolio, { fetchData, limit: LIMIT });

export default PortfolioWithPagination;
