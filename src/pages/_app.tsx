import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "@root/styles/globals.css";

import { defaultTheme } from "@root/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
