import type { AppProps } from "next/app";
import type { ThemeType } from "../type";
import { useContext, useEffect } from "react";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import LayoutView from "../components/LayoutView";
import { themeContext } from "../context/ThemeProvider";
import theme from "../lib/theme";
import queryClient from "../react-query";
import { GlobalStyle } from "../styles/GlobalStyle";

declare module "styled-components" {
  export interface DefaultTheme {
    headerBackgroundColor: string;
    headerMenuLabelColor: string;
    dividerColor: string;
    backgroundColor: string;
    color: string;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const context = useContext(themeContext);

  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider
            theme={{
              headerBackgroundColor: "#161b22",
              headerMenuLabelColor: "#f78166",
              dividerColor: "#21262d",
              backgroundColor: "#0d1117",
              color: "#ffffff",
            }}
          >
            <LayoutView>
              <Component {...pageProps} />
            </LayoutView>
            <GlobalStyle />
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
