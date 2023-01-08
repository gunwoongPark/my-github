import { isNil } from "lodash";
import { darkMode, lightMode } from "../lib/theme";
import { ThemeType } from "../type";

export const getTheme = () => {
  if (typeof window !== "undefined") {
    const localStorageTheme: ThemeType | null = localStorage.getItem(
      "mode"
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
  } else {
    return lightMode;
  }
};
