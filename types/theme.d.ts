import { DefaultTheme } from "styled-components";

export type ThemeType = "DARK" | "LIGHT";

export interface ThemeProviderType {
  [index: any]: any;
  DARK: DefaultTheme;
  LIGHT: DefaultTheme;
}
