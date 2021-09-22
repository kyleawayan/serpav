import { Box, Container, Divider, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import Menu from "../../components/Menu";
import { supabase } from "../../lib/supabaseClient";
import Image from "next/image";
import Stats from "../../components/reviewPage/Stats";
import Comment from "../../components/reviewPage/Comment";

export default function FoodReview({ Food, Comments }) {
  return (
    <div>
      <Menu />
      <Container mt={8} mb={10}>
        <Heading as="h1" mb={5}>
          {Food[0].FoodTitle}
        </Heading>
        {Food[0].hasImage && (
          <Box
            ht={100}
            minH={300}
            background="gray.500"
            borderRadius="lg"
            mb={5}
            pos="relative"
            overflow="hidden"
          >
            <Image
              src={`https://pjgjuryphyzcubkjowdl.supabase.in/storage/v1/object/public/food/${Food[0].id}.webp`}
              alt={Food[0].FoodTitle}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        )}
        <Text mb={5}>{Food[0].FoodDescription}</Text>
        <Stats
          averageTaste={Food[0].AverageTaste}
          averageLooks={Food[0].AverageLooks}
          reviewCount={Food[0].ReviewCount}
          commentCount={Food[0].CommentCount}
        />
        <Divider mb={4} mt={4} />
        <Heading as="h2" fontSize="xl">
          Comments
        </Heading>
        {Comments.map((comment) => (
          <Comment
            displayName={comment.DisplayName}
            date={comment.Time}
            text={comment.Comment}
            looksRate={comment.Rating_Looks}
            tasteRate={comment.Rating_Taste}
            key={comment.id}
          />
        ))}
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
      "id, FoodTitle, FoodDescription, FoodImage, TimeCreated, AverageTaste, AverageLooks, ReviewCount, CommentCount, hasImage"
    )
    .eq("id", params.id);

  let { data: Comments, dataError } = await supabase
    .from("Survey")
    .select("id, Comment, DisplayName, Rating_Taste, Rating_Looks, Time")
    .eq("FoodId", params.id)
    .neq("Comment", "");

  // Pass post data to the page via props
  return { props: { Food, Comments } };
}
