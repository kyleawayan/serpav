import {
  AspectRatio,
  Box,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import Menu from "../../components/Menu";
import { supabase } from "../../lib/supabaseClient";
import Image from "next/image";
import Stats from "../../components/reviewPage/Stats";
import Comment from "../../components/reviewPage/Comment";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function FoodReview({ Food, Comments }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NextSeo
        title={Food[0].FoodTitle}
        description={`${Food[0].FoodTitle} reviews on Serpav.`}
        canonical={`https://serpav.vercel.app/reviews/${Food[0].id}`}
        openGraph={{
          title: Food[0].FoodTitle,
          description: `${Food[0].FoodTitle} reviews on Serpav.`,
          images: [
            {
              url: `https://pjgjuryphyzcubkjowdl.supabase.in/storage/v1/object/public/food/${Food[0].id}.webp`,
              alt: Food[0].FoodTitle,
            },
          ],
          site_name: "Serpav",
        }}
      />
      <Menu />
      <Container mt={8} mb={10}>
        <Heading as="h1" mb={5}>
          {Food[0].FoodTitle}
        </Heading>
        {Food[0].hasImage && (
          <AspectRatio ratio={1}>
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
          </AspectRatio>
        )}
        <Text mb={5}>{Food[0].FoodDescription}</Text>
        <Stats
          averageTaste={Food[0].AverageTaste ?? 0}
          averageLooks={Food[0].AverageLooks ?? 0}
          reviewCount={Food[0].ReviewCount ?? 0}
          commentCount={Food[0].CommentCount ?? 0}
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
    .neq("Comment", "")
    .order("Time", { ascending: false });

  if (Food.length == 0) {
    return {
      notFound: true,
    };
  }

  // Pass post data to the page via props
  return { props: { Food, Comments }, revalidate: 10 };
}
