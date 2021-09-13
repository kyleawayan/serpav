import { Container, Box} from "@chakra-ui/layout";
import React from "react";
import Menu from "../components/Menu";
import Image from "next/image";
import pavPic from "../public/pav.jpg";
import Card from "../components/Card";
import { supabase } from "../lib/supabaseClient";
export default function reviews() {
  // let { data: Survey, error } = await supabase
  // .from('Survey')
  // .select("id")
  return (
    <div>
      <Menu />
        <Card src={pavPic} alt="The Pavillion" foodName="Burgers" tasteRating="1" looksRating="2" comment="Booty"/>
    </div>
  );
}