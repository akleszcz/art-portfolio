import React, { FunctionComponent, useState } from "react";
import { DefaultTheme } from "styled-components";
import { THEME_LS_KEY } from "../styles/consts";
import { themes } from "../styles/themes";
import { ThemeName } from "../styles/types";

export const UiContext = React.createContext({theme: themes.autumn, setTheme: (theme: DefaultTheme) => {}});

export const UiContextProvider: FunctionComponent = ({children}) => {
  const [theme, setTheme] = useState(() => {
    const themeName = localStorage.getItem(THEME_LS_KEY) as ThemeName;
    return themes[themeName] || themes.autumn;
  });

  return <UiContext.Provider value={{theme, setTheme}}>{children}</UiContext.Provider>;
};
