import { Container } from "@/components/container";
import { Projects } from "@/components/projects";
import { TimeLine } from "@/components/timeline";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Projects
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I'm a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference.
        </p>
        <Projects />
        <TimeLine />
      </Container>
    </div>
  );
}
