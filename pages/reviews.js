import { Container, Grid } from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";
import pavPic from "../public/pav.jpg";
import Card from "../components/Card";
import { supabase } from "../lib/supabaseClient";

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
              averageRating={foodItem.AverageTaste}
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
    .select("id, FoodTitle, AverageTaste");

  console.log(Food);
  return {
    props: { Food },
  };
}
