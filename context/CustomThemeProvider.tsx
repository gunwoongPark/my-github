import { ChangeEvent, createContext, PropsWithChildren, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../lib/theme";
import { getTheme } from "../lib/theme/getTheme";

type ThemeContextValueType = {
  value: DefaultTheme;
  action: (e: ChangeEvent<HTMLInputElement>) => void;
} | null;

// create context
export const themeContext = createContext<ThemeContextValueType>(null);

const CustomThemeProvider = (props: PropsWithChildren<Record<never, any>>) => {
  const [theme, setTheme] = useState<DefaultTheme>(getTheme());

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      localStorage.setItem("theme", "DARK");
      setTheme(darkTheme);
    } else {
      localStorage.setItem("theme", "LIGHT");
      setTheme(lightTheme);
    }
  };

  const value = {
    value: theme,
    action: (e: ChangeEvent<HTMLInputElement>) => toggleTheme(e),
  };

  return (
    <themeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </themeContext.Provider>
  );
};

export default CustomThemeProvider;
