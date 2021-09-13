import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  fonts: {
    heading: "Inter, system-ui, sans-serif",
    body: "Inter, serif",
  },
});

export default theme;
