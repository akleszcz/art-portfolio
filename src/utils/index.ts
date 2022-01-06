import { OptionType } from "../types";

export const createSelectOption = <T>(optionName: T): OptionType<T> => ({
  label: optionName,
  value: optionName,
});

export const createPageNumber = (pageNumberString: string | null, numberOfPages: number): number => {
  if (pageNumberString === null) {
    return 1;
  }

  const pageNumber = Number.parseInt(pageNumberString, 10);
  if (Number.isNaN(pageNumber) || pageNumber < 1 || pageNumber > numberOfPages) {
    throw new Error(`Invalid page number: ${pageNumberString}`);

  }
  return pageNumber;
};
