import { supabase } from "../lib/supabaseClient";
import { Container, Heading } from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";
import ReviewForm from "../components/ReviewForm";
import { useRouter } from "next/router";
import axios from "axios";

export default function Review({ Food }) {
  const router = useRouter();
  const onSubmit = async (values, { setSubmitting }) => {
    let error = false;
    const reqFoodId = parseInt(values.foodOption);

    try {
      await supabase.from("Survey").insert([
        {
          Rating_Taste: values.tasteRating,
          Rating_Looks: values.looksRating,
          Comment: values.comment,
          FoodId: reqFoodId,
          DisplayName: values.displayName,
        },
      ]);

      await axios.post("/api/calculateNumbers", { reqFoodId: reqFoodId });
    } catch (e) {
      error = True;
      console.error(e);
    }

    if (!error) {
      setSubmitting(false);
      router.push("/thanks");
    } else {
      setSubmitting(false);
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
