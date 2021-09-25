import React from "react";
import { Box } from "@chakra-ui/react";
import { Divider, Heading, Text } from "@chakra-ui/layout";
import ReactStars from "react-rating-stars-component";
import moment from "moment";

function average(a, b) {
  return (a + b) / 2;
}

export default function Comment({
  displayName,
  date,
  text,
  looksRate,
  tasteRate,
}) {
  return (
    <Box pt={5}>
      <Text mb={4}>{text}</Text>
      <Text>
        -{" "}
        {!displayName || /^\s*$/.test(displayName) ? "Anonymous" : displayName}
      </Text>
      <ReactStars
        isHalf={true}
        value={average(tasteRate, looksRate)}
        edit={false}
      />
      <Text fontSize="sm" color="gray.500">
        Rated Taste: {tasteRate}/5, Looks: {looksRate}/5
      </Text>
      <Text fontSize="sm" color="gray.500">
        Reviewed {moment(date).fromNow()}
      </Text>
      <Divider mt={4} />
    </Box>
  );
}
