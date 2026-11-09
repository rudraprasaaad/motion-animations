export const SubHeading = ({
  as: Tag = "h1",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}) => {
  return (
    <Tag className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
      {children}
    </Tag>
  );
};
