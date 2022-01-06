import { SingleValue } from "react-select";
import { OptionType } from "../../types";

export type PaginationProps = {
  currentPage: number,
  handlePageChange: (pageNumber: SingleValue<OptionType>) => void,
  numberOfPages: number
};
