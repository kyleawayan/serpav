import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
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

  const onSubmit = () => {
    setInvalid(false);
    if (!foodName || /^\s*$/.test(foodName)) {
      setInvalid(true);
    }
    // submit to db
    console.log(foodName);
    // once user submits to db, just refresh the page for now bc list of food was statically prerendered already
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
            <Button colorScheme="blue" mr={3} onClick={onSubmit}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
