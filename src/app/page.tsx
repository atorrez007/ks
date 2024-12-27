// import { Badge, Card, Container, Flex, Heading, Text } from "@radix-ui/themes";
// import Link from "next/link";

import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Container size="1">
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
        </Container> */}
        <ProjectCard />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
