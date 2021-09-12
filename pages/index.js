import { Container } from "@chakra-ui/layout";
import ImageBanner from "../components/ImageBanner";
import pavPic from "../public/pav.jpg";

export default function Home() {
  return (
    <div>
      <ImageBanner src={pavPic} alt="The Pavillion" />
      <Container mt={4}>test</Container>
    </div>
  );
}
