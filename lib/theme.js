import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
});

export default theme;
