import { AppProps } from "next/app";
import { useContext } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import LayoutView from "../components/LayoutView";
import { themeContext } from "../context/ThemeProvider";
import { GlobalStyle } from "../styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  const value = useContext(themeContext);

  return (
    <ThemeProvider theme={value?.theme as DefaultTheme}>
      <LayoutView>
        <Component {...pageProps} />
      </LayoutView>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
