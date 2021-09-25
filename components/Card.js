import React from "react";
import Image from "next/image";
import { AspectRatio, Center, Heading, Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import ReactStars from "react-rating-stars-component";
import Link from "next/link";

export default function Card({
  hasImage,
  foodName,
  stars,
  reviewCount,
  commentCount,
  foodId,
}) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <AspectRatio ratio={1}>
        <Link href={`/reviews/${foodId}`} passHref>
          <Box pos="relative" background="gray.500" as="a">
            {hasImage && (
              <Image
                src={`https://pjgjuryphyzcubkjowdl.supabase.in/storage/v1/object/public/food/${foodId}.webp`}
                alt={foodName}
                layout="fill"
                objectFit="cover"
              />
            )}
            {!hasImage && (
              <Center h="100%" color="white">
                No picture avaliable
              </Center>
            )}
          </Box>
        </Link>
      </AspectRatio>
      <Box p={6}>
        <Heading size="md" mb={1}>
          {foodName}
        </Heading>
        <ReactStars isHalf={true} value={stars} edit={false} />
        <Text fontSize="sm" color="gray.500" mb={4}>
          {reviewCount ?? 0} reviews, {commentCount ?? 0} comments
        </Text>
        <Link href={`/reviews/${foodId}`} passHref>
          <Button as="a">View {"->"}</Button>
        </Link>
      </Box>
    </Box>
  );
}
