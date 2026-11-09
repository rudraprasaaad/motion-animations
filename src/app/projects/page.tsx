import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { SubHeading } from "@/components/subheading";
import { TimeLine } from "@/components/timeline";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Heading>Projects</Heading>
        <SubHeading>
          I&apos;m a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference.
        </SubHeading>
        <Projects />
        <TimeLine />
      </Container>
    </div>
  );
}
