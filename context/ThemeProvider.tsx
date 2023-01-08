import React, { ChangeEvent, createContext, useState } from "react";
import { DefaultTheme } from "styled-components";
import { darkMode, lightMode } from "../lib/theme";
import { getTheme } from "../util/getTheme";

export type ThemeContextValueType = {
  theme: DefaultTheme;
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
} | null;

// create context
export const themeContext = createContext<ThemeContextValueType>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<DefaultTheme>(getTheme());

  // toggle theme
  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log("toggle !!");
    console.log(theme);

    if (e.target.checked) {
      localStorage.setItem("mode", "DARK");
      setTheme(darkMode);
    } else {
      localStorage.setItem("mode", "LIGHT");
      setTheme(lightMode);
    }
  };

  const value = {
    theme: theme,
    toggleTheme: (e: ChangeEvent<HTMLInputElement>) => toggleTheme(e),
  };

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
