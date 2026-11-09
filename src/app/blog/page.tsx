import type { Metadata } from "next";
import { BlogPost } from "@/app/blog/[slug]/page";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import { getBlogs } from "@/utils/mdx";

export const metadata: Metadata = {
  title: "All blogs - Seishiro Nagi",
  description: "thinking is pain in the ass.",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Heading>All blogs</Heading>
        <SubHeading>
          i&apos;m a swe with a passion for building scalable and efficient
          systems. I&apos;m Currently working as swe at Google.
        </SubHeading>
        <div className="flex flex-col gap-10 py-10">
          {allBlogs.map(
            (blog) =>
              blog.frontmatter && (
                <BlogPost
                  key={blog.slug}
                  slug={blog.slug}
                  frontmatter={blog.frontmatter}
                />
              ),
          )}
        </div>
      </Container>
    </div>
  );
}
