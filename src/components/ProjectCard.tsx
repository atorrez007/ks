import { Container, Card, Flex, Heading, Text, Badge } from "@radix-ui/themes";
import Link from "next/link";
export default function ProjectCard() {
  return (
    <Container size="1">
      <Flex direction="column" pb="4">
        <Heading>Coding Issue Tracker</Heading>
        <Text color="gray">
          Here you can find the issues relevant to your certain project
        </Text>
      </Flex>
      <Flex gap="4" direction="column">
        <Card>
          <Flex gap="1" direction="column">
            <Text>Issue #24 - Button is Wrong Color</Text>
            <Flex gap="2">
              <Badge color="orange">Devops</Badge>
              <Badge color="blue">UI</Badge>
            </Flex>
            <Text>Lorem Ipsum</Text>
            <Text color="blue">
              <Link href="/about">Route</Link>
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}
