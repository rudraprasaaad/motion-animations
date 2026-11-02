import { cn } from "@/utils/cn";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-4xl mx-auto w-full dark:bg-white bg-black",
        className,
      )}
    >
      {children}
    </div>
  );
};
