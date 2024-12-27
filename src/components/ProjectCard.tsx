import {
  Container,
  Card,
  Flex,
  Heading,
  Text,
  Badge,
  Button,
} from "@radix-ui/themes";

import Link from "next/link";

interface ProjectType {
  title: string;
  uri: string;
  description: string;
}
export default function ProjectCard({ title, description, uri }: ProjectType) {
  return (
    <Container size="1">
      <Flex direction="column" pb="4">
        <Text color="gray">{description}</Text>
      </Flex>
      <Flex gap="4" direction="column">
        <Card>
          <Text>{uri}</Text>
          <Heading>{title}</Heading>
          <Text color="gray">{description}</Text>
          <Flex gap="1" direction="column">
            <Text>Issue #24 - Button is Wrong Color</Text>
            <Flex gap="2">
              <Badge color="orange">Finance</Badge>
              <Badge color="blue">UI</Badge>
            </Flex>
            <Text>Lorem Ipsum</Text>
            <Button>Donate</Button>
            <Text color="blue">
              <Link href="/about">Route</Link>
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}
