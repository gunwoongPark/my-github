import { isNil } from "lodash";
import React, { ChangeEvent, createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { themeProvider } from "../lib/theme";
import { ThemeType } from "../types/theme";

type ThemeContextValueType = {
  value: DefaultTheme;
  action: (e: ChangeEvent<HTMLInputElement>) => void;
} | null;

// create context
export const themeContext = createContext<ThemeContextValueType>(null);

const CustomThemeProvider = (props: {
  children: React.ReactNode;
  cookieTheme: ThemeType;
}) => {
  const [theme, setTheme] = useState<DefaultTheme>(
    themeProvider[props.cookieTheme]
  );

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.cookie = "theme=DARK";
      setTheme(themeProvider["DARK"]);
    } else {
      document.cookie = "theme=LIGHT";
      setTheme(themeProvider["LIGHT"]);
    }
  };

  return (
    <themeContext.Provider
      value={{
        value: theme,
        action: (e: ChangeEvent<HTMLInputElement>) => toggleTheme(e),
      }}
    >
      <ThemeProvider theme={theme as DefaultTheme}>
        {props.children}
      </ThemeProvider>
    </themeContext.Provider>
  );
};

export default CustomThemeProvider;
