import "styled-components";
import { ThemeType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: ThemeType;
    headerBackgroundColor: string;
    headerMenuLabelColor: string;
    dividerColor: string;
    backgroundColor: string;
    color: string;
  }
}
