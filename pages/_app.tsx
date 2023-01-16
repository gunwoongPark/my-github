import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LayoutView from "../components/LayoutView";
import CustomThemeProvider from "../context/CustomThemeProvider";
import queryClient from "../react-query";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeType } from "../types/theme";

export default function MyApp(props: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={props.pageProps.dehydratedState}>
          {/* <ThemeProvider> */}

          <CustomThemeProvider
            cookieTheme={(props.cookieTheme as ThemeType) ?? "LIGHT"}
          >
            <LayoutView>
              <props.Component {...props.pageProps} />
            </LayoutView>
            <GlobalStyle />
          </CustomThemeProvider>
          {/* </ThemeProvider> */}
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    cookieTheme: appContext.ctx.req?.headers.cookie,
  };
};
