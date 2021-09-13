import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
