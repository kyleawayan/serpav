import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import { supabase } from "../lib/supabaseClient";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useState } from "react";

export default function AddFoodModal({ isOpen, onClose }) {
  const [foodName, setFoodName] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async () => {
    setInvalid(false);
    setSubmitting(true);

    if (!foodName || /^\s*$/.test(foodName)) {
      setInvalid(true);
      return;
    }

    const { error } = await supabase
      .from("Food")
      .insert([{ FoodTitle: foodName }]);

    if (!error) {
      // once user submits to db, just refresh the page for now bc list of food was statically prerendered already
      window.location.reload(true);
    } else {
      setSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Add food item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={invalid}>
              <FormLabel mb={2}>
                Type in the name of the food item. Everyone will be able to see
                this.
              </FormLabel>
              <Input
                value={foodName}
                onChange={(event) => {
                  setFoodName(event.target.value);
                  setInvalid(false);
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onSubmit}
              isLoading={submitting}
              loadingText="Adding..."
              disabled={submitting}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
