import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";
import { ThemeType } from "../type";

export const GlobalStyle = createGlobalStyle<{ theme: any }>`
  ${reset}

  body{
    background:${(props) => props.theme?.backgroundColor};
    color: ${(props) => props.theme?.color};
  }

  /* html[data-theme='DARK']{
    background: #000;
    color: #fff;
  }
  
  html[data-theme='LIGHT']{
    background: #fff;
    color: #000;
  } */

`;
