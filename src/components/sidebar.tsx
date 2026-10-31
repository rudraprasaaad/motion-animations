"use client";

import {
  IconChartBar,
  IconChevronLeft,
  IconChevronRight,
  IconHome,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";
import { motion } from "motion/react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <IconHome />,
    },
    {
      name: "Analytics",
      href: "/analytics",
      icon: <IconChartBar />,
    },
    {
      name: "Users",
      href: "/users",
      icon: <IconUser />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <IconSettings />,
    },
  ];

  const sidebarVariant = {
    open: {
      width: "16rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.7,
        delayChildren: 1,
      },
    },
    closed: {
      staggerChildren: 0.5,
      delayChildren: -1,
    },
  };

  const childVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      transition={{
        duration: 0.3,
      }}
      className="border-r border-border h-full"
    >
      <motion.nav
        variants={sidebarVariant}
        className="bg-white shadow-md h-full"
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className={`text-xl font-semibold ${!isOpen && "sr-only"}`}>
            Dashboard
          </h2>
          <button
            onClick={toggleSideBar}
            className="bg-white p-2 rounded-full shadow-md hover:bg-accent/10 focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open Sidebar"}
          >
            {isOpen ? <IconChevronLeft /> : <IconChevronRight />}
          </button>
        </div>
        <div className="relative">
          <nav className="p-4">
            <motion.ul variants={parentVariants} className="space-y-2">
              {links.map((link) => (
                <motion.li variants={childVariants} key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center p-2 text-muted rounded hover:bg-accent/10 hover:text-accent"
                    title={!isOpen ? link.name : ""}
                  >
                    {link.icon}
                    {isOpen && link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};
