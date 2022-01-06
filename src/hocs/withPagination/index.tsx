import { FunctionComponent } from "react";
import { useSearchParams } from "react-router-dom";
import { SingleValue } from "react-select";
import Pagination from "../../components/Pagination";
import { OptionType } from "../../types";
import { createPageNumber } from "../../utils";
import { WithPagination } from "./types";

const withPagination: WithPagination = (WrappedComponent, { loadData, limit }) => {
  const WithPagination: FunctionComponent = () => {
    const numberOfPages = 3;
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = createPageNumber(searchParams.get('page'), numberOfPages);
    const offset = (currentPage - 1) * limit + 1;

    const handlePageChange = (option: SingleValue<OptionType>): void => {
      const newPage = option?.value || currentPage;
      setSearchParams({ page: newPage.toString() });
    };
    return <>
      <WrappedComponent data={loadData({ offset, limit })}/>
      <Pagination currentPage={currentPage} handlePageChange={handlePageChange} numberOfPages={numberOfPages} />
    </>;
  };
  return WithPagination;
};

export default withPagination;
