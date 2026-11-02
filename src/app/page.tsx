import { Container } from "@/components/container";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          Seishirou Nagi
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          i&apos;m a swe with a passion for building scalable and efficient
          systems. I&apos;m Currently working as swe at Google.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
