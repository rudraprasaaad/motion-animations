import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { Card } from "./card";

export const Content = () => {
  return (
    <div
      className={cn(
        GeistSans.className,
        "h-screen flex items-center justify-center bg-gray-50",
      )}
    >
      <Card />
    </div>
  );
};
