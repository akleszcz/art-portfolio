import { FunctionComponent } from "react";
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { createSearchParams, useLocation } from "react-router-dom";
import ReactSelect from "react-select";
import { createSelectOption } from "../../utils";
import * as Styled from './styles';
import { PaginationProps } from "./types";

const Pagination: FunctionComponent<PaginationProps> = ({ currentPage, handlePageChange, numberOfPages }) => {
  const { pathname } = useLocation();

  const pageNumbers = Array(numberOfPages).fill(0).map((_,index)=>(index + 1).toString());
  const options = pageNumbers.map(createSelectOption);
  const previousPage = (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return <Styled.Nav>
    <Styled.NavList>
      <Styled.Link
        to={`${pathname}?${createSearchParams({ page: previousPage })}`}
        className={currentPage === 1 ? 'disabled' : ''}><MdNavigateBefore size={42}/>
      </Styled.Link>
      <ReactSelect
        menuPlacement="auto" 
        value={createSelectOption(currentPage.toString())}
        onChange={handlePageChange}
        options={options}></ReactSelect>
      <Styled.Link
        to={`${pathname}?${createSearchParams({ page: nextPage })}`}
        className={currentPage === numberOfPages ? 'disabled' : ''}><MdNavigateNext size={42}/>
      </Styled.Link>
    </Styled.NavList>
  </Styled.Nav>;
};

export default Pagination;
