"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export const projects = [
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

export const Projects = () => {
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building web apps and products that can impact millions of lives.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        {projects.map((project, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px )",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group relative mb-4"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                width={300}
                height={300}
                alt={project.title}
                className="w-full h-72 rounded-xl object-cover group-hover:scale-[1.02] transition duration-200"
              />
              <h2 className="font-bold tracking-tight mt-2 z-20 dark:text-neutral-500 text-neutral-40">
                {project.title}
              </h2>
              <p className="text-sm mt-2 max-w-xs dark:text-neutral-500 text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
