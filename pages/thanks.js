import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";

export default function reviews() {
  return (
    <div>
      <Menu />
      <Container>
        <Heading mt={8}>Thank you!</Heading>
      </Container>
    </div>
  );
}
