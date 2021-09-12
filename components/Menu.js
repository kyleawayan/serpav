import { Box, Container, Heading } from "@chakra-ui/layout";
import React from "react";

export default function Menu() {
  return (
    <Box pos="absolute" zIndex={2} color="white" w="100%" bg="blackAlpha.800">
      <Container w="100%" maxW="container.xl" padding={2}>
        <Heading size="lg">SURPAV</Heading>
      </Container>
    </Box>
  );
}
