import { Container, Grid } from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";
import Card from "../components/Card";
import { supabase } from "../lib/supabaseClient";
import { NextSeo } from "next-seo";

function average(a, b) {
  return (a + b) / 2;
}

export default function reviews({ Food }) {
  return (
    <div>
      <NextSeo
        title="Food Reviews"
        description="A Yelp for UC Merced's Pavillion!"
        canonical="https://serpav.vercel.app/reviews"
        openGraph={{
          title: "Food Reviews",
          description: "A Yelp for UC Merced's Pavillion!",
          site_name: "Serpav",
        }}
      />
      <Menu />
      <Container mt={8} maxW="container.lg" mb={10}>
        <Grid
          templateColumns={{ lg: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {Food.map((foodItem) => (
            <Card
              foodName={foodItem.FoodTitle}
              foodId={foodItem.id}
              stars={average(foodItem.AverageTaste, foodItem.AverageLooks)}
              reviewCount={foodItem.ReviewCount}
              commentCount={foodItem.CommentCount}
              hasImage={foodItem.hasImage}
              key={foodItem.id}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  let { data: Food, error } = await supabase
    .from("Food")
    .select(
      "id, FoodTitle, AverageTaste, AverageLooks, ReviewCount, CommentCount, hasImage"
    )
    .order("hasImage")
    .order("ReviewCount", { ascending: false });

  return {
    props: { Food },
    revalidate: 10,
  };
}
