import { OptionType } from "../types";

export const createSelectOption = <T>(optionName: T): OptionType<T> => ({
  label: optionName,
  value: optionName,
});
