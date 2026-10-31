"use client";

import { IconRocket, IconShare, IconWand } from "@tabler/icons-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket />,
    title: "Generate",
    description:
      "With our state of the art AI, you can generate ultra realistic images in no time at all",
    content: (
      <div>
        <Image
          src="/images/generate.jpg"
          alt="Misty mountain valley at sunrise"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconWand />,
    title: "Edit",
    description:
      "Refine any image with simple prompts, remove objects, swap backgrounds and restyle in seconds",
    content: (
      <div>
        <Image
          src="/images/edit.jpg"
          alt="Green hills and clouds at sunrise"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconShare />,
    title: "Share",
    description:
      "Export in any format and share your creations with your team or the world with a single link",
    content: (
      <div>
        <Image
          src="/images/share.jpg"
          alt="Sunlit forest path"
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
];

export function MotionHookExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#252523", "#ffafcc", "#bc6c25"],
  );

  return (
    <motion.div
      ref={containerRef}
      style={{
        backgroundColor,
      }}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
    >
      <div className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
        {features.map((feature) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100,
      damping: 20,
      mass: 1,
    },
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid items-center py-40 grid-cols-2 gap-20"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p>{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};
