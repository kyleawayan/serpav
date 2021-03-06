import { Button } from "@chakra-ui/button";
import { Container, Heading, Text } from "@chakra-ui/layout";
import ImageBanner from "../components/ImageBanner";
import Menu from "../components/Menu";
import pavPic from "../public/pav.jpg";
import Link from "next/link";

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
          Leave and read reviews on food items served at the Pavillion.
        </Text>
        <Text mb={3}>This is student ran.</Text>
        <Link href="/review" passHref>
          <Button colorScheme="blue" as="a" mb={10} mr={2}>
            Submit a review!
          </Button>
        </Link>
        <Link href="/reviews" passHref>
          <Button colorScheme="blue" as="a" mb={10}>
            Read reviews!
          </Button>
        </Link>
      </Container>
    </div>
  );
}
