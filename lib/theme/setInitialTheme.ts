import { isNil } from "lodash";
import type { ThemeType } from "../../type";

const setInitialTheme = (): ThemeType => {
  const localStorageTheme: ThemeType | null = localStorage.getItem(
    "theme"
  ) as ThemeType | null;

  if (isNil(localStorageTheme)) {
    const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "DARK"
      : "LIGHT";
    return osTheme;
  }

  return localStorageTheme;
};

export default setInitialTheme;
