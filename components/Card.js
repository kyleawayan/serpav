import React from "react";
import Image from "next/image";
import { Heading, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";

export default function Card({ src, alt, foodName, foodId }) {
  const [data, setData] = useState({});

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box pos="relative" h={300}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </Box>
      <Box p={6}>
        <Heading size="md" mb={1}>
          {foodName}
        </Heading>
        <ReactStars isHalf={true} value={0} edit={false} />
        <Text fontSize="sm" color="gray.500">
          {0} reviews
        </Text>
      </Box>
    </Box>
  );
}
