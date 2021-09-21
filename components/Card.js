import React from "react";
import Image from "next/image";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";

export default function Card({
  src,
  alt,
  foodName,
  tasteRating,
  looksRating,
  comment,
}) {
  return (
    <Box>
      <Box pos="relative" h={300}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </Box>
      <Box p={4}>
        <Text className="headingCard">Food : {foodName}</Text>
        <Text>Taste: {tasteRating}/5</Text>
        <Text>Look: {looksRating}/5</Text>
        <Text>Comments: {comment}</Text>
        <Button colorScheme="blue" as="a" mb={10}>
          Click Me
        </Button>
      </Box>
    </Box>
  );
}
