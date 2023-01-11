import { isNil } from "lodash";
import { darkTheme, lightTheme } from ".";
import { ThemeType } from "../../type";

export const getTheme = () => {
  const localStorageTheme: ThemeType | null = localStorage.getItem(
    "theme"
  ) as ThemeType | null;

  if (isNil(localStorageTheme)) {
    const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (osTheme) {
      return darkTheme;
    } else {
      return lightTheme;
    }
  }

  if (localStorageTheme === "DARK") {
    return darkTheme;
  }

  return lightTheme;
};
