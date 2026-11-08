import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "All blogs - Seishiro Nagi",
  description: "thinking is pain in the ass.",
};

export async function generateMetaData({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const frontmatter = await getBlogFrontMatterBySlug(params.slug);

  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }
  return {
    title: frontmatter.title + " Seishrou Nagi ",
    description: frontmatter.description,
  };
}

export default function SingleBlogPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <Suspense
          fallback={<p className="text-sm text-secondary">Loading...</p>}
        >
          <BlogPost params={params} />
        </Suspense>
      </Container>
    </div>
  );
}

async function BlogPost({
  params,
}: {
  params: PageProps<"/blog/[slug]">["params"];
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  return (
    <>
      {blog.frontmatter.image ? (
        <Image
          src={blog.frontmatter.image}
          alt={blog.frontmatter.title ?? "Blog cover"}
          width={1600}
          height={900}
          loading="eager"
          className="mb-8 aspect-video w-full rounded-xl object-cover"
        />
      ) : null}
      <div className="prose mx-auto">{blog.content}</div>
    </>
  );
}
