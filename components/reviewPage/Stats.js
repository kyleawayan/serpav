import React from "react";
import { Flex } from "@chakra-ui/layout";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";

export default function Stats({
  averageTaste,
  averageLooks,
  reviewCount,
  commentCount,
}) {
  return (
    <Flex>
      <Stat>
        <StatLabel>Taste</StatLabel>
        <StatNumber>{averageTaste.toFixed(1)}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Looks</StatLabel>
        <StatNumber>{averageLooks.toFixed(1)}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Reviews</StatLabel>
        <StatNumber>{reviewCount}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Comments</StatLabel>
        <StatNumber>{commentCount}</StatNumber>
      </Stat>
    </Flex>
  );
}
