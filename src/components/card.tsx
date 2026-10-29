"use client";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { AnimatePresence, motion } from "motion/react";
import {
  Icon24Hours,
  Icon360View,
  Icon3dCubeSphere,
  IconMessage,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";

export const Card = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={cn(
              "w-72 min-h-104 h-112 rounded-xl",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              "p-4 flex flex-col",
            )}
          >
            <h2 className="mt-3 font-bold text-[10px]">UI Labs</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              A collection of beautiful UI components, let&apos;s get on with it
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1"
              >
                {" "}
                <Logo size={50} className="h-4 w-4" />
                UI Labs
                <IconX className="h-3 w-3 text-neutral-400" />
              </button>
            </div>
            <div className="relative flex-1 mt-4 rounded-lg bg-gray-100 border border-dashed border-neutral-200">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute h-full w-full border border-neutral-200 bg-white rounded-lg inset-0 divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconMessage className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      UI Labs components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon24Hours className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      24 Hours turnaround
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      Super fast delivery at warp speed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon360View className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      360 days all around
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      We&apos;re here help you to 24/7
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon3dCubeSphere className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Some other components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      Here goes another subtitle
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4 items-center justify-center">
                  <div className="h-4 w-4 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconPlus className="h-3 w-3 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] mt-1 text-neutral-600">
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
