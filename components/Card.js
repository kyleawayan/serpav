import React from "react";
import Image from "next/image";
import {Container, Heading, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";

export default function Card({ src, alt, foodName, tasteRating, looksRating, comment}) {
  return (
    <Box maxW="100%"className="row">
        <Box w="33%" p={4} className="column">
            <Image src={src} alt={alt} className="imgCard"/>
            <Box>
                <Container mt={8}>
                    <Text className="headingCard">
                        Food : {foodName}
                    </Text>
                    <Text>
                        Taste: {tasteRating}/5
                    </Text>
                    <Text>
                        Look: {looksRating}/5
                    </Text>
                    <Text>
                        Comments: {comment}
                    </Text>
                </Container>
                <Button colorScheme="blue" as="a" mb={10}>
                    Click Me
                </Button>
            </Box>
        </Box>
        <Box w="33%" p={4} className="column">
            <Image src={src} alt={alt} className="imgCard"/>
            <Box>
                <Container mt={8}>
                    <Text className="headingCard">
                        Food : Love
                    </Text>
                    <Text>
                        Taste: 3/5
                    </Text>
                    <Text>
                        Look: 3/5
                    </Text>
                    <Text>
                        Comments: XDXDXD
                    </Text>
                </Container>
                <Button colorScheme="blue" as="a" mb={10}>
                    Click Me
                </Button>
            </Box>
        </Box>
        <Box w="33%" p={4} className="column">
            <Image src={src} alt={alt} className="imgCard"/>
            <Box>
                <Container mt={8}>
                    <Text className="headingCard">
                        Food : Love
                    </Text>
                    <Text>
                        Taste: 3/5
                    </Text>
                    <Text>
                        Look: 3/5
                    </Text>
                    <Text>
                        Comments: XDXDXD
                    </Text>
                </Container>
                <Button colorScheme="blue" as="a" mb={10}>
                    Click Me
                </Button>
            </Box>
        </Box>
        <Box w="33%" p={4} className="column">
            <Image src={src} alt={alt} className="imgCard"/>
            <Box>
                <Container mt={8}>
                    <Text className="headingCard">
                        Food : {foodName}
                    </Text>
                    <Text>
                        Taste: 3/5
                    </Text>
                    <Text>
                        Look: 3/5
                    </Text>
                    <Text>
                        Comments: XDXDXD
                    </Text>
                </Container>
                <Button colorScheme="blue" as="a" mb={10}>
                    Click Me
                </Button>
            </Box>
        </Box>
        <Box w="33%" p={4} className="column">
            <Image src={src} alt={alt} className="imgCard"/>
            <Box>
                <Container mt={8}>
                    <Text className="headingCard">
                        Food : Love
                    </Text>
                    <Text>
                        Taste: 3/5
                    </Text>
                    <Text>
                        Look: 3/5
                    </Text>
                    <Text>
                        Comments: XDXDXD
                    </Text>
                </Container>
                <Button colorScheme="blue" as="a" mb={10}>
                    Click Me
                </Button>
            </Box>
        </Box>
        <Box w="33%" p={4} className="column">
            <Image src={src} alt={alt} className="imgCard"/>
            <Box>
                <Container mt={8}>
                    <Text className="headingCard">
                        Food : Love
                    </Text>
                    <Text>
                        Taste: 3/5
                    </Text>
                    <Text>
                        Look: 3/5
                    </Text>
                    <Text>
                        Comments: XDXDXD
                    </Text>
                </Container>
                <Button colorScheme="blue" as="a" mb={10}>
                    Click Me
                </Button>
            </Box>
        </Box>
        
    </Box>
  );
}
