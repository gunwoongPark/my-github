import type { AppProps } from "next/app";
import Script from "next/script";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import LayoutView from "../components/LayoutView";
import queryClient from "../react-query";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="theme-script" strategy="afterInteractive">
        {`
          const localStorageTheme = localStorage.getItem('theme');

          if(localStorageTheme){
            if(localStorageTheme === "DARK"){
              document.querySelector('body').className = "DARK";
            }else{
              document.querySelector('body').className = "LIGHT";
            }
          }

          else{
            const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

            if(osTheme){
              document.querySelector('body').className = "DARK";
            }else{
              document.querySelector('body').className = "LIGHT";
            }
          }
        `}
      </Script>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <LayoutView>
            <Component {...pageProps} />
          </LayoutView>
          <GlobalStyle />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
