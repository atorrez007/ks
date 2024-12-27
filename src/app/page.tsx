// import { Badge, Card, Container, Flex, Heading, Text } from "@radix-ui/themes";
// import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ProjectCard
          title="Project 1"
          description="FinTech project focused on creating..."
          uri="imageurl.com"
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
