import "styled-components";
import type { ThemeType } from ".";

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
