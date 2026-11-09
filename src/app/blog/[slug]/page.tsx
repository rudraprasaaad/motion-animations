import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/components/view-transitions";
import { Suspense, type ReactNode } from "react";
import { Container } from "@/components/container";
import {
  getBlogFrontMatterBySlug,
  getSingleBlog,
  type FrontMatter,
} from "@/utils/mdx";
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

const truncate = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length) + "..." : str;
};

export function BlogPost({
  slug,
  frontmatter,
  content,
  showImage = true,
}: {
  slug: string;
  frontmatter: Partial<FrontMatter>;
  content?: ReactNode;
  showImage?: boolean;
}) {
  const image =
    showImage && frontmatter.image ? (
    <img
      src={frontmatter.image}
      alt={frontmatter.title ?? "Blog cover"}
      loading={content ? "eager" : "lazy"}
      className="rounded-2xl object-cover mb-20 max-h-96 w-full max-w-2xl mx-auto shadow-xl"
    />
  ) : null;

  if (content) {
    return (
      <>
        {image}
        <div className="prose mx-auto">{content}</div>
      </>
    );
  }

  return (
    <Link href={`/blog/${slug}`}>
      {image}
      <div className="flex items-center justify-between">
        <h2 className="text-primary text-base font-bold tracking-tight">
          {frontmatter.title}
        </h2>
        <p className="text-secondary text-sm md:text-sm">
          {new Date(frontmatter.date || "").toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
        {truncate(frontmatter.description || "", 150)}
      </p>
    </Link>
  );
}

export default function SingleBlogPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Suspense
          fallback={<p className="text-sm text-secondary">Loading...</p>}
        >
          <SingleBlog params={params} />
        </Suspense>
      </Container>
    </div>
  );
}

async function SingleBlog({
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
    <BlogPost
      slug={slug}
      frontmatter={blog.frontmatter}
      content={blog.content}
    />
  );
}
