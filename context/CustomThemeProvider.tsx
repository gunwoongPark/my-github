import { isNil } from "lodash";
import React, { ChangeEvent, createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkMode, lightMode } from "../lib/theme";
import { ThemeType } from "../type";
import { getTheme } from "../util/getTheme";

export type CustomThemeContextValueType = {
  theme: DefaultTheme;
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
} | null;

// create context
export const themeContext = createContext<CustomThemeContextValueType>(null);

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<DefaultTheme | null>(null);

  useEffect(() => {
    const osTheme: ThemeType | null = localStorage.getItem(
      "theme"
    ) as ThemeType | null;

    if (isNil(osTheme)) {
      const _theme = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (_theme) {
        setTheme(darkMode);
      } else {
        setTheme(lightMode);
      }
    } else {
      if (osTheme === "DARK") {
        setTheme(darkMode);
      } else {
        setTheme(lightMode);
      }
    }
  }, []);

  // toggle theme
  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      localStorage.setItem("theme", "DARK");
      setTheme(darkMode);
    } else {
      localStorage.setItem("theme", "LIGHT");
      setTheme(lightMode);
    }
  };

  const value = {
    theme: theme,
    toggleTheme: (e: ChangeEvent<HTMLInputElement>) => toggleTheme(e),
  };

  if (isNil(theme)) {
    return <p>Loading...</p>;
  }

  return (
    <themeContext.Provider value={value as CustomThemeContextValueType}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </themeContext.Provider>
  );
};

export default CustomThemeProvider;
