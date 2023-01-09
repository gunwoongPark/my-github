import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body[class='DARK']{
    background: #000;
    color: #fff;
  }
  
  body[class='LIGHT']{
    background: #fff;
    color: #000;
  }

`;
