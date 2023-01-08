import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ThemeType } from "../type";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}
  body{
    background:${(props) => props.theme.backgroundColor};
    color:${(props) => props.theme.color};
  }    
`;
