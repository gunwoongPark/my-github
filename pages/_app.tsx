import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LayoutView from "../components/LayoutView";
import queryClient from "../react-query";
import { GlobalStyle } from "../styles/GlobalStyle";

const CustomThemeProvider = dynamic(
  () => import("../context/CustomThemeProvider"),
  { ssr: false }
);

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
