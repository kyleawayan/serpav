import { Container, Grid } from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";
import pavPic from "../public/pav.jpg";
import Card from "../components/Card";
import { supabase } from "../lib/supabaseClient";

function average(a, b) {
  return (a + b) / 2;
}

export default function reviews({ Food }) {
  return (
    <div>
      <Menu />
      <Container mt={8} maxW="container.lg" mb={10}>
        <Grid
          templateColumns={{ lg: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
          m={2}
        >
          {Food.map((foodItem) => (
            <Card
              src={pavPic}
              alt="The Pavillion"
              foodName={foodItem.FoodTitle}
              foodId={foodItem.id}
              stars={average(foodItem.AverageTaste, foodItem.AverageLooks)}
              reviewCount={foodItem.ReviewCount}
              commentCount={foodItem.CommentCount}
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
      "id, FoodTitle, AverageTaste, AverageLooks, ReviewCount, CommentCount"
    );

  return {
    props: { Food },
    revalidate: 10,
  };
}
