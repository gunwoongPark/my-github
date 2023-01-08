import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ThemeProvider from "../context/ThemeProvider";
import App from "../lib/app";
import queryClient from "../react-query";

export default function NextApp(props: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={props.pageProps.dehydratedState}>
          <ThemeProvider>
            <App {...props} />
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
