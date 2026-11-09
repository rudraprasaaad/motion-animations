"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project, projects as defaultProjects } from "@/constants/projects";
import { SectionHeading } from "./section-heading";

export const Projects = ({
  projects = defaultProjects,
}: {
  projects: Project[];
}) => {
  return (
    <div className="py-10">
      <SectionHeading delay={0.2}>A lifetime in projects.</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
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
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top transition duration-200 group-hover:scale-[1.02]"
                />
              </div>
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
