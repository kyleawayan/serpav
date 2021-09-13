import React, { useState } from "react";
import { Formik } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
import ReactStars from "react-rating-stars-component";
import { Divider, Textarea, Button, Link } from "@chakra-ui/react";
import AddFoodModal from "./AddFoodModal";

const initialValues = {
  foodOption: "",
  tasteRating: 0,
  looksRating: 0,
  comment: "",
};

const validations = (values) => {
  const errors = {};
  if (!values.foodOption || values.foodOption === "Select food item") {
    errors.foodOption = "Please select a food item";
  }
  if (values.tasteRating === 0) {
    errors.tasteRating = "Please rate the taste";
  }
  if (values.looksRating === 0) {
    errors.looksRating = "Please rate the looks";
  }
  return errors;
};

export default function ReviewForm({ foodOptions, onSubmit }) {
  const [addFoodModalOpen, setAddFoodModalOpen] = useState(false);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validations}
        onSubmit={onSubmit}
      >
        {({ values, errors, handleSubmit, isSubmitting, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={errors.foodOption} mb={5}>
              <FormLabel>Select the food item</FormLabel>
              <Select
                placeholder="Select food item"
                onChange={(event) =>
                  setFieldValue("foodOption", event.target.value)
                }
                value={values.foodOption}
                mb={2}
              >
                {foodOptions.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.FoodTitle}
                  </option>
                ))}
              </Select>
              <Link fontSize="sm" onClick={() => setAddFoodModalOpen(true)}>
                Food item not there?
              </Link>
              <AddFoodModal
                isOpen={addFoodModalOpen}
                onClose={() => setAddFoodModalOpen(false)}
              />
              <FormErrorMessage>{errors.foodOption}</FormErrorMessage>
            </FormControl>
            <Divider mb={4} />
            <FormLabel>Rate the taste</FormLabel>
            <FormControl isInvalid={errors.tasteRating}>
              <ReactStars
                half={false}
                size={48}
                value={values.tasteRating}
                onChange={(value) => setFieldValue("tasteRating", value)}
              />
              <FormErrorMessage>{errors.tasteRating}</FormErrorMessage>
              <Divider mb={4} mt={4} />
            </FormControl>
            <FormControl isInvalid={errors.tasteRating}>
              <FormLabel>Rate the looks</FormLabel>
              <ReactStars
                half={false}
                size={48}
                value={values.looksRating}
                onChange={(value) => setFieldValue("looksRating", value)}
              />
              <FormErrorMessage>{errors.looksRating}</FormErrorMessage>
              <Divider mb={4} mt={4} />
            </FormControl>
            <FormLabel>Additional comments (optional)</FormLabel>
            <Textarea
              placeholder="Will be public"
              value={values.comment}
              onChange={(event) => setFieldValue("comment", event.target.value)}
              mb={4}
            />
            <Button type="submit" colorScheme="blue" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
