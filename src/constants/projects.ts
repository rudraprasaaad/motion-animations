export type Project = {
  title: string;
  src: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "Linear",
    src: "/projects/linear.webp",
    description:
      "A product development system for planning and building software with fast, keyboard-first workflows.",
    href: "https://linear.app",
  },
  {
    title: "Vercel",
    src: "/projects/vercel.webp",
    description:
      "A frontend cloud platform for deploying and scaling web apps with zero configuration.",
    href: "https://vercel.com",
  },
  {
    title: "Cal.com",
    src: "/projects/cal.webp",
    description:
      "An open-source scheduling platform for booking meetings without the back-and-forth.",
    href: "https://cal.com",
  },
  {
    title: "Stripe",
    src: "/projects/stripe.webp",
    description:
      "Payments infrastructure for accepting online payments and managing revenue at any scale.",
    href: "https://stripe.com",
  },
];
