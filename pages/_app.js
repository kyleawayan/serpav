import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import Router from "next/router";
import { DefaultSeo } from "next-seo";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        dangerouslySetAllPagesToNoIndex={true}
        dangerouslySetAllPagesToNoFollow={true}
        title="Serpav"
        description="A Yelp for UC Merced's Pavillion!"
        canonical="https://serpav.vercel.app/"
        openGraph={{
          title: "Serpav",
          description: "A Yelp for UC Merced's Pavillion!",
          images: [
            {
              url: "/pav.jpg",
              alt: "The Pavillion",
              width: 1170,
              height: 450,
            },
          ],
          site_name: "Serpav",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
