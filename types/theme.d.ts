import { DefaultTheme } from "styled-components";

export type ThemeType = "DARK" | "LIGHT";

export interface ThemeProviderType {
  [index: string]: DefaultTheme;
  DARK: DefaultTheme;
  LIGHT: DefaultTheme;
}
