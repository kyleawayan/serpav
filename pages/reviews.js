import { Container, Box} from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";
import Image from "next/image";
import pavPic from "../public/pav.jpg";
import Card from "../components/Card";

export default function reviews() {
  return (
    <div>
      <Menu />
        <Card src={pavPic} alt="The Pavillion" foodName="Burgers"/>
    </div>
  );
}