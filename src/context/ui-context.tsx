import React, { FunctionComponent, useState } from "react";
import { DEFAULT_THEME_NAME, THEME_LS_KEY } from "../styles/consts";
import { ThemeName } from "../styles/types";

export const UiContext = React.createContext<{
  themeName: ThemeName;
  setThemeName: (theme: ThemeName) => void;
    }>({ themeName: DEFAULT_THEME_NAME, setThemeName: (theme: ThemeName) => {} });

export const UiContextProvider: FunctionComponent = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => (localStorage.getItem(THEME_LS_KEY) || DEFAULT_THEME_NAME) as ThemeName);

  return <UiContext.Provider value={{ themeName, setThemeName }}>{children}</UiContext.Provider>;
};
