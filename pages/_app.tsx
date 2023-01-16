// import { ThemeProvider, useTheme } from "next-themes";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import LayoutView from "../components/LayoutView";
import CustomThemeProvider from "../context/CustomThemeProvider";
import { darkTheme, lightTheme } from "../lib/theme";
import queryClient from "../react-query";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeType } from "../types/theme";

export default function MyApp(props: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={props.pageProps.dehydratedState}>
          {/* <ThemeProvider> */}

          <CustomThemeProvider cookieTheme={props.cookieTheme as ThemeType}>
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

  console.log(appContext.ctx.req?.cookies.theme);

  return {
    ...appProps,
    cookieTheme: appContext.ctx.req?.cookies.theme,
  };
};
