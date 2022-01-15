import { SingleValue } from "react-select";
import { OptionType } from "../../types";

export type PaginationProps = {
  className?: string;
  currentPage: number,
  handlePageChange: (pageNumber: SingleValue<OptionType>) => void,
  numberOfPages: number
};
