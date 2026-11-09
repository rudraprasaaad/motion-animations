import { Container } from "@/components/container";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import { projects } from "@/constants/projects";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>Seishirou Nagi</Heading>
        <SubHeading>
          i&apos;m a swe with a passion for building scalable and efficient
          systems. I&apos;m Currently working as swe at Google.
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Testimonials />
      </Container>
    </div>
  );
}
