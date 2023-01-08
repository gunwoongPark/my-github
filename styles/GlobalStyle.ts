import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body[class='dark-theme']{
    background: #000;
    color: #fff;
  }
  
  body[class='light-theme']{
    background: #fff;
    color: #000;
  }
`;
