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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          mattis augue non leo fringilla, dapibus condimentum nisi congue.
          Aenean ultricies suscipit ex sed luctus.
        </Text>
        <Text mb={3}>
          This is student ran, so feel free to say whatever you want.
        </Text>
        <Link href="/review" passHref>
          <Button colorScheme="blue" as="a">
            Submit a review!
          </Button>
        </Link>
      </Container>
    </div>
  );
}
