import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Menu />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
