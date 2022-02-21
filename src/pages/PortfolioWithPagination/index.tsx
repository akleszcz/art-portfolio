import Portfolio from "../../components/Portfolio";
import { PortfolioImageData } from "../../components/Portfolio/types";
import withPagination from "../../hocs/withPagination";
import { FetchData } from "../../hocs/withPagination/types";
import { LIMIT } from "./consts";

const fetchData: FetchData<PortfolioImageData> = async ({ limit, offset }) => {
  const totalCount = 23; // normally it would be returned by a server
  const pageNumber = Math.ceil(offset / limit);
  const quotient = Math.floor(totalCount / limit);
  const remainder = totalCount % limit;
  const dataCount = pageNumber <= quotient ? limit : remainder;
  const integers = Array(dataCount).fill(0).map((_,index)=> index + offset); // normally it would be returned by a server
  const data = integers.map(integer => ({
    id: integer.toString(),
    thumbnailUrl: `${process.env.PUBLIC_URL}/assets/thumbnails/placeholder-thumbnail-${integer}.png`,
    altText: 'Placeholder',
  }));
  return Promise.resolve({ data, totalCount });
};

export default withPagination(Portfolio, { fetchData, limit: LIMIT });

