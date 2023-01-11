import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LayoutView from "../components/LayoutView";
import queryClient from "../react-query";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
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
