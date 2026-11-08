import type { Metadata } from "next";
import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "All blogs - Seishiro Nagi",
  description: "thinking is pain in the ass.",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          All blogs
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          i&apos;m a swe with a passion for building scalable and efficient
          systems. I&apos;m Currently working as swe at Google.
        </p>
        <div className="flex flex-col gap-4 py-10">
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
      </Container>
    </div>
  );
}
