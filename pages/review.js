import { supabase } from "../lib/supabaseClient";
import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";
import ReviewForm from "../components/ReviewForm";
import { useRouter } from "next/router";

export default function Review({ Food }) {
  const router = useRouter();
  const onSubmit = async (event) => {
    console.log(event);

    const { data, error } = await supabase.from("Survey").insert([
      {
        Rating_Taste: event.tasteRating,
        Rating_Looks: event.looksRating,
        Comment: event.comment,
        FoodId: parseInt(event.foodOption),
      },
    ]);
    if (!error) {
      router.push("/thanks");
    }
  };

  return (
    <div>
      <Menu />
      <Container mt={8}>
        <Heading as="h1" mb={4}>
          Submit a review
        </Heading>
        <ReviewForm foodOptions={Food} onSubmit={onSubmit} />
      </Container>
    </div>
  );
}

// temp fix until i figure out revalidating
export async function getServerSideProps() {
  let { data: Food, error } = await supabase
    .from("Food")
    .select("id, FoodTitle");

  return {
    props: { Food },
  };
}
