import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <SubHeading>
          I'm open to freelancing offers. Reach out to inquire more about my
          work.
        </SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}
