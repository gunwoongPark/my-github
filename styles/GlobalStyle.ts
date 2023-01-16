import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* html[data-theme='DARK']{
    background: #000;
    color: #fff;
  }
  
  html[data-theme='LIGHT']{
    background: #fff;
    color: #000;
  } */

`;
