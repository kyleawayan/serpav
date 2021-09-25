import { Button } from "@chakra-ui/button";
import { Container, Heading, Text } from "@chakra-ui/layout";
import ImageBanner from "../components/ImageBanner";
import Menu from "../components/Menu";
import pavPic from "../public/pav.jpg";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <Menu transparent />
      <ImageBanner src={pavPic} alt="The Pavillion" />
      <Container mt={8}>
        <Heading as="h1" mb={3}>
          A Yelp for UC Merced&apos;s Pavillion!
        </Heading>
        <Text mb={3}>
          A small guide for incoming and frequent Pavillion customers with
          professional reviews.
        </Text>
        <Text mb={3}>This is student ran.</Text>
        <Link href="/review" passHref>
          <Button colorScheme="blue" as="a" mb={10}>
            Submit a review!
          </Button>
        </Link>
      </Container>
    </div>
  );
}
