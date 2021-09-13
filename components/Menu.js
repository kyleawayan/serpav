import { Box, Container, Heading, Link as L } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";

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
  return (
    <Box
      pos={transparent ? "absolute" : "relative"}
      zIndex={2}
      color={transparent ? "white" : "black"}
      w="100%"
      bg={transparent ? "blackAlpha.800" : "transparent"}
      borderBottom={transparent ? null : "solid 1px black"}
    >
      <Container w="100%" maxW="container.xl" padding={2}>
        <Link href="/" passHref>
          <Heading size="lg" as="a" mr={4}>
            SURPAV
          </Heading>
        </Link>
        {links.map((link, i) => (
          <Link href={link.to} key={i} passHref>
            <L mr={3}>{link.name}</L>
          </Link>
        ))}
      </Container>
    </Box>
  );
}
