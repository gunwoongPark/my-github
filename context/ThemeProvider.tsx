import React, { ChangeEvent, createContext, useState } from "react";
import { DefaultTheme } from "styled-components";
import { darkMode, lightMode } from "../lib/theme";
import { getTheme } from "../util/getTheme";

type ThemeContextValueType = {
  value: DefaultTheme;
  action: (e: ChangeEvent<HTMLInputElement>) => void;
} | null;

// create context
export const themeContext = createContext<ThemeContextValueType>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<DefaultTheme>(getTheme());

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
    value: theme,
    action: (e: ChangeEvent<HTMLInputElement>) => toggleTheme(e),
  };

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
