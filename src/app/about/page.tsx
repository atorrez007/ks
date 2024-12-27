import { Button, Container, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function About() {
  return (
    <Container>
      <Flex>
        <Text>About Page</Text>
        <Link href="/">Home</Link>
      </Flex>
    </Container>
  );
}
