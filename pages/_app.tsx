import type { AppProps } from "next/app";
import Script from "next/script";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LayoutView from "../components/LayoutView";
import queryClient from "../react-query";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  console.log("_app.tsx");

  return (
    <>
      <Script id="theme-script" strategy="afterInteractive">
        {`
          const localStorageTheme = localStorage.getItem('theme');

          if(localStorageTheme){
            if(localStorageTheme === "DARK"){
              document.querySelector('body').className = "dark-theme";
            }else{
              document.querySelector('body').className = "light-theme";
            }
          }

          else{
            const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

            if(osTheme){
              document.querySelector('body').className = "dark-theme";
            }else{
              document.querySelector('body').className = "light-theme";
            }
          }
        `}
      </Script>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {/* <CustomThemeProvider> */}

          <LayoutView>
            <Component {...pageProps} />
          </LayoutView>
          <GlobalStyle />
          {/* </CustomThemeProvider> */}
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
