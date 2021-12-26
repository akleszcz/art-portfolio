import { OptionType } from "../types";
import { themes } from "./themes";

export type ThemeName = keyof typeof themes;

export type ThemeOptionType = OptionType<ThemeName>;
