import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";

export default function review() {
  return (
    <div>
      <Menu />
      <Container mt={8}>
        <Heading>Submit a review</Heading>
      </Container>
    </div>
  );
}
