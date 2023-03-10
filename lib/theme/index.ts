import { ThemeProviderType } from "../../types/theme";

export const themeProvider: ThemeProviderType = {
  DARK: {
    mode: "DARK",
    headerBackgroundColor: "#161b22",
    headerMenuLabelColor: "#f78166",
    dividerColor: "#21262d",
    backgroundColor: "#0d1117",
    color: "#ffffff",
  },
  LIGHT: {
    mode: "LIGHT",
    headerBackgroundColor: "#24292f",
    headerMenuLabelColor: "#fd8c73",
    dividerColor: "hsla(210,18%,87%,1)",
    backgroundColor: "#ffffff",
    color: "#000000",
  },
};
