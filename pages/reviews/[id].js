import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import Menu from "../../components/Menu";
import { supabase } from "../../lib/supabaseClient";
import Image from "next/image";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";

export default function FoodReview({ Food, Comments }) {
  console.log(Food);
  return (
    <div>
      <Menu />
      <Container mt={8}>
        <Heading as="h1" mb={5}>
          {Food[0].FoodTitle}
        </Heading>
        <Box
          ht={100}
          minH={300}
          background="gray.500"
          borderRadius="lg"
          mb={5}
        ></Box>
        <Text mb={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          maximus orci quis eros malesuada viverra. Pellentesque ac enim quis
          mauris lacinia dignissim in quis diam. Nullam aliquet ac tellus et
          gravida.
        </Text>
        <Flex>
          <Stat>
            <StatLabel>Taste</StatLabel>
            <StatNumber>{Food[0].AverageTaste.toFixed(2)}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Looks</StatLabel>
            <StatNumber>{Food[0].AverageLooks.toFixed(2)}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Reviews</StatLabel>
            <StatNumber>{Food[0].ReviewCount}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Comments</StatLabel>
            <StatNumber>{Food[0].CommentCount}</StatNumber>
          </Stat>
        </Flex>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  let { data: Food, error } = await supabase.from("Food").select("id");

  // Get the paths we want to pre-render based on posts

  const paths = Food.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let { data: Food, foodError } = await supabase
    .from("Food")
    .select(
      "FoodTitle, FoodDescription, FoodImage, TimeCreated, AverageTaste, AverageLooks, ReviewCount, CommentCount"
    )
    .eq("id", params.id);

  let { data: Comments, dataError } = await supabase
    .from("Survey")
    .select("Comment, DisplayName")
    .eq("FoodId", params.id)
    .neq("Comment", "");

  // Pass post data to the page via props
  return { props: { Food, Comments } };
}
