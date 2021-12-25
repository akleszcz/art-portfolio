import { FunctionComponent, useContext, useState } from "react";
import { SingleValue } from "react-select";
import { UiContext } from "../../context/ui-context";
import { themes } from "../../styles/themes";
import { ThemeName } from "../../styles/types";
import { OptionType } from "../../types";
import * as Styled from "./styles";

const themeOptions = Object.keys(themes).map((key) => ({value: key, label: key})) as OptionType[];

const NavBar: FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const {setTheme} = useContext(UiContext);
  const handleThemeChange = (newValue: SingleValue<OptionType>): void => {
    setSelectedOption(newValue as OptionType);
    setTheme(themes[newValue?.value as ThemeName]);
  };

  return <Styled.Nav aria-label="Primary navigation">
    <span>Home</span>
    <span>Portfolio</span>
    <span>About</span>
    <span>Contact</span>
    <Styled.Select
      defaultValue={selectedOption}
      onChange={handleThemeChange}
      options={themeOptions}
      placeholder="Theme"
    /></Styled.Nav>;
};

export default NavBar;
