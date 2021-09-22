import React from "react";
import Image from "next/image";
import { Heading, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import ReactStars from "react-rating-stars-component";
import Link from "next/link";

export default function Card({
  src,
  alt,
  foodName,
  stars,
  reviewCount,
  commentCount,
  foodId,
}) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box pos="relative" h={300}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </Box>
      <Box p={6}>
        <Heading size="md" mb={1}>
          {foodName}
        </Heading>
        <ReactStars isHalf={true} value={stars} edit={false} />
        <Text fontSize="sm" color="gray.500" mb={4}>
          {reviewCount ?? 0} reviews, {commentCount ?? 0} comments
        </Text>
        <Link href={`/reviews/${foodId}`} passHref>
          <Button>View {"->"}</Button>
        </Link>
      </Box>
    </Box>
  );
}
