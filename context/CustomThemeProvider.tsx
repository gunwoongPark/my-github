import React, {
  ChangeEvent,
  createContext,
  PropsWithChildren,
  useState,
} from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, themeProvider } from "../lib/theme";
import { ThemeType } from "../types/theme";

type ThemeContextValueType = {
  value: ThemeType;
  action: (e: ChangeEvent<HTMLInputElement>) => void;
} | null;

// create context
export const themeContext = createContext<ThemeContextValueType>(null);

const CustomThemeProvider = (props: {
  children: React.ReactNode;
  cookieTheme: ThemeType;
}) => {
  const [theme, setTheme] = useState<ThemeType>(props.cookieTheme);

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.cookie = "theme=DARK";
      setTheme("DARK");
    } else {
      document.cookie = "theme=LIGHT";
      setTheme("LIGHT");
    }
  };

  const value = {
    value: theme,
    action: (e: ChangeEvent<HTMLInputElement>) => toggleTheme(e),
  };

  return (
    <themeContext.Provider value={value}>
      <ThemeProvider theme={theme === "DARK" ? darkTheme : lightTheme}>
        {props.children}
      </ThemeProvider>
    </themeContext.Provider>
  );
};

export default CustomThemeProvider;
