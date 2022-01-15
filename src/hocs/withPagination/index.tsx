import { FunctionComponent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SingleValue } from "react-select";
import * as Styled from "./styles";
import { OptionType } from "../../types";
import { createPageNumber } from "../../utils";
import { WithPagination } from "./types";

const withPagination: WithPagination = (WrappedComponent, { fetchData, limit }) => {
  const WithPagination: FunctionComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState<string[]>([]);
    const [totalCount, setTotalCount] = useState(0);

    let numberOfPages = 0;
    let currentPage = 0;
    let offset = 0;

    if (totalCount) {
      numberOfPages = Math.ceil(totalCount/limit);
      currentPage = numberOfPages === 0 ? 1 : createPageNumber(searchParams.get('page'), numberOfPages);
      offset = (currentPage - 1) * limit + 1;
    }

    useEffect(() => {
      const setDataAndTotalCount = async (): Promise<void> => {
        const result = await fetchData({ offset, limit });
        setData(result.data);
        setTotalCount(result.totalCount);
      };
      setDataAndTotalCount();
    }, [offset]);

    const handlePageChange = (option: SingleValue<OptionType>): void => {
      const newPage = option?.value || currentPage;
      setSearchParams({ page: newPage.toString() });
    };
    if (totalCount === 0) {
      return <div>No data</div>;
    }
    return <>
      <WrappedComponent data={data}/>
      <Styled.PaginationWithMargin
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        numberOfPages={numberOfPages}
      />
    </>;
  };
  return WithPagination;
};

export default withPagination;
