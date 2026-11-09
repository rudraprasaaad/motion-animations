"use client";

import { useInView, motion } from "motion/react";
import React, { useRef } from "react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "cn";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export const TimeLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const data: Data[] = [
    {
      title: "2024",
      content: [
        {
          title: "Reached $20K MRR with my VSCode fork.",
          description:
            "Reached the revenue of milestone of $20K MRR with my VSCode fork",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Shipped the first public release of my VSCode fork.",
          description:
            "Opened the editor to early users and started charging for the pro features.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Joined a product team as a design engineer.",
          description:
            "Owned motion, layout, and the details between design and the code that shipped.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Built my first production app used by real customers.",
          description:
            "Took a side project from a prototype to something people paid for every month.",
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          title: "Started writing in public about building interfaces.",
          description:
            "Published notes on animation, layout, and the small decisions that make software feel finished.",
        },
      ],
    },
    {
      title: "2019",
      content: [
        {
          title: "Learned to ship full-stack projects on my own.",
          description:
            "Spent the year building, breaking, and rebuilding small apps until the stack felt familiar.",
        },
      ],
    },
  ];

  return (
    <div ref={ref} className="py-10">
      {data.map((year, idx) => (
        <div content="px-4 py-1" key={year.title} className="mb-4">
          <motion.h2
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.2 * idx,
            }}
            className="font-bold text-black shadow-input rounded-md w-fit px-2 py-0.5 mb-2"
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <Step isInView={isInView} idx={idx}>
                  <motion.h3
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.1 * idx,
                    }}
                    className="text-netural-600"
                  >
                    {item.title}
                  </motion.h3>
                </Step>

                {item.description && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.3 * idx,
                    }}
                    className="text-neutral-400 pl-6 text-sm pt-1"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="h-4 w-4 mt-0.5 text-neutral-500" />
      {children}
    </motion.div>
  );
};
