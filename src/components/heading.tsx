import React from "react";

export const Heading = ({
  as: Tag = "h1",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}) => {
  return (
    <Tag className="text-primary tracking-tighter drop-shadow-lg text-2xl font-bold tracking-tight md:text-4xl">
      {children}
    </Tag>
  );
};
