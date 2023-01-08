import { isNil } from "lodash";
import { darkMode, lightMode } from "../lib/theme";
import { ThemeType } from "../type";

export const getTheme = () => {
  const localStorageTheme: ThemeType | null = localStorage.getItem(
    "theme"
  ) as ThemeType | null;

  if (isNil(localStorageTheme)) {
    const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (osTheme) {
      return darkMode;
    } else {
      return lightMode;
    }
  } else {
    if (localStorageTheme === "DARK") {
      return darkMode;
    } else {
      return lightMode;
    }
  }
};
