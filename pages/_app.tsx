import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useTheme } from "styled-components";
import LayoutView from "../components/LayoutView";
import CustomThemeProvider from "../context/CustomThemeProvider";
import queryClient from "../react-query";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CustomThemeProvider>
            <LayoutView>
              <Component {...pageProps} />
            </LayoutView>
            <GlobalStyle />
          </CustomThemeProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
