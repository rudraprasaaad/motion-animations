import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="flex flex-col gap-4">
      {allBlogs.map((blog, idx) => (
        <Link key={blog.slug} href={`/blog/${blog.slug}`}>
          <div className="flex items-center justify-between">
            <h2 className="text-primary text-base font-bold tracking-tight">
              {blog.title}
            </h2>
            <p className="text-secondary text-sm md:text-sm">
              {new Date(blog.date || "").toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>

          <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
            {truncate(blog.description || "", 150)}
          </p>
        </Link>
      ))}
    </div>
  );
};
