import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import { TimeLine } from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Heading>About Me</Heading>
        <SubHeading>
          I&apos;m a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference.
        </SubHeading>
        <SubHeading>
          I love to travel and explore new places. I&apos;m a big fan of nature
          and adventure. I&apos;m also a big fan of technology an innovation.
        </SubHeading>
        <Collage />
        <SubHeading>Here&apos;s a timeline of my life achievements.</SubHeading>
        <TimeLine />
      </Container>
    </div>
  );
}
