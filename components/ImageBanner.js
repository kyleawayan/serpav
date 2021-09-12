import React from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/layout";

export default function ImageBanner({ src, alt }) {
  return (
    <Box w="100%" h="400px" pos="relative">
      <Image src={src} layout="fill" objectFit="cover" alt={alt} />
    </Box>
  );
}
