import { ChakraProvider } from "@chakra-ui/react";

import Footer from "../components/layout/Footer";

import theme from "../theme/theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />

      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
