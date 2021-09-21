import { Grid } from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";
import pavPic from "../public/pav.jpg";
import Card from "../components/Card";
import { supabase } from "../lib/supabaseClient";

export default function reviews({ Food }) {
  return (
    <div>
      <Menu />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {Food.map((foodItem) => (
          <Card
            src={pavPic}
            alt="The Pavillion"
            foodName={foodItem.FoodTitle}
            tasteRating="1"
            looksRating="2"
            comment="Booty"
            key={foodItem.id}
          />
        ))}
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  let { data: Food, error } = await supabase
    .from("Food")
    .select("id, FoodTitle");

  return {
    props: { Food },
  };
}
