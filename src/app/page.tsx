import { Container } from "@/components/container";
import { LandingBlogs } from "@/components/landing-blogs";
import ProjectsPage from "./projects/page";
import { Projects } from "@/components/projects";
import { Heading } from "@/components/heading";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Heading>Seishirou Nagi</Heading>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          i&apos;m a swe with a passion for building scalable and efficient
          systems. I&apos;m Currently working as swe at Google.
        </p>
        <Projects />
        <LandingBlogs />
      </Container>
    </div>
  );
}
