import { Box, Container, Heading, Link as L } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";
import { useColorMode } from "@chakra-ui/color-mode";

const links = [
  {
    name: "Submit a Review",
    to: "/review",
  },
  {
    name: "Food Reviews",
    to: "/reviews",
  },
];

export default function Menu({ transparent }) {
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      pos={transparent ? "absolute" : "relative"}
      zIndex={2}
      color={transparent ? "whiteAlpha.900" : null}
      w="100%"
      bg={transparent ? "blackAlpha.800" : "transparent"}
    >
      <Container w="100%" maxW="container.xl" padding={2}>
        <Link href="/" passHref>
          <Heading size="lg" as="a" mr={4}>
            SERPAV
          </Heading>
        </Link>
        {links.map((link, i) => (
          <Link href={link.to} key={i} passHref>
            <L mr={3} fontSize={["sm", "md"]}>
              {link.name}
            </L>
          </Link>
        ))}
        <L mr={3} onClick={toggleColorMode} fontSize={["sm", "md"]}>
          Theme
        </L>
      </Container>
    </Box>
  );
}
