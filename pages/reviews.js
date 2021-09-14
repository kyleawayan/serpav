import { Container, Box, Flex } from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";
import Image from "next/image";
import pavPic from "../public/pav.jpg";
import Card from "../components/Card";
import { supabase } from "../lib/supabaseClient";

export default function reviews({ Food }) {
  return (
    <div>
      <Menu />
      <Box maxW="100%" className="row">
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
      </Box>
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
