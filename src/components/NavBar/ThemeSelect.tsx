import { FunctionComponent, useContext, useState } from "react";
import { MdPalette } from 'react-icons/md';
import { SingleValue } from "react-select";
import { UiContext } from "../../context/ui-context";
import { DEFAULT_THEME_NAME } from "../../styles/consts";
import { themes } from "../../styles/themes";
import { ThemeName, ThemeOptionType } from "../../styles/types";
import { createSelectOption } from "../../utils";
import * as Styled from "./styles";

const themeOptions = Object.keys(themes).map((key) => createSelectOption(key)) as ThemeOptionType[];

const ThemeSelect: FunctionComponent = () => {
  const { setThemeName } = useContext(UiContext);
  const [selectedOption, setSelectedOption] = useState(() => createSelectOption(DEFAULT_THEME_NAME));

  const handleThemeChange = (newValue: SingleValue<ThemeOptionType>): void => {
    setSelectedOption(newValue as ThemeOptionType);
    setThemeName(newValue?.value as ThemeName);
  };

  return <Styled.SelectContainer>
    <MdPalette />
    <Styled.Select
      aria-label="Theme select"
      defaultValue={selectedOption}
      inputId="theme"
      onChange={handleThemeChange}
      options={themeOptions}
      placeholder="Theme"
    />
  </Styled.SelectContainer>;
};

export default ThemeSelect;
