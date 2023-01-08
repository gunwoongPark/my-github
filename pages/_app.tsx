import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import LayoutView from "../components/LayoutView";
import queryClient from "../react-query";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider
            theme={{
              mode: "DARK",
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
