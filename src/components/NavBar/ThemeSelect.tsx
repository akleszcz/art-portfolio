import { FunctionComponent, useContext, useState } from "react";
import { MdPalette } from 'react-icons/md';
import ReactSelect, { SingleValue } from "react-select";
import { useTheme } from "styled-components";
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
  const theme = useTheme();

  const customStyles = {
    container: (base: any) => ({
      ...base,
      textTransform: 'capitalize',
      width: '8rem',
    }),
    control: (base: any) => ({
      ...base,
      backgroundColor: 'transparent',
      borderStyle: 'none',
      boxShadow: 'none',
    }),
    singleValue: (base: any) => ({
      ...base,
      color: theme.colors.text,
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: theme.colors.background,
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected ? theme.colors.selectBackground : 'transparent',
      '&:active': {
        backgroundColor: theme.colors.selectActiveBackground,
      },
      color: theme.colors.text,
    })
  };

  const handleThemeChange = (newValue: SingleValue<ThemeOptionType>): void => {
    setSelectedOption(newValue as ThemeOptionType);
    setThemeName(newValue?.value as ThemeName);
  };

  return <Styled.SelectContainer>
    <MdPalette />
    <ReactSelect
      aria-label="Theme select"
      defaultValue={selectedOption}
      inputId="theme"
      onChange={handleThemeChange}
      options={themeOptions}
      placeholder="Theme"
      styles={customStyles}
    />
  </Styled.SelectContainer>;
};

export default ThemeSelect;
