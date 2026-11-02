import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A perfect portfolio website template that showcases your skills, minimal and smooth microintercations",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <Container className=" px-10 md:pt-20 md:pb-10 min-h-screen prose">
      {children}
    </Container>
  );
}
