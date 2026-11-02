import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";

import fs from "fs/promises";
import path from "path";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

const BLOG_DIR = path.join(process.cwd(), "src", "data");

async function getBlog(slug: string) {
  try {
    return await fs.readFile(path.join(BLOG_DIR, `${slug}.mdx`), "utf-8");
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const files = await fs.readdir(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const source = await getBlog(slug);
  const title = source?.match(/^#\s+(.+)$/m)?.[1];

  return {
    title: title ? `${title} - Seishiro Nagi` : "Blog - Seishiro Nagi",
  };
}

export default async function SingleBlog({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const source = await getBlog(slug);

  if (!source) notFound();

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="px-10 md:pt-20 md:pb-10 min-h-screen prose">
        <MDXRemote
          source={source}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  { theme: "github-dark", keepBackground: true },
                ],
              ],
            },
          }}
        />
      </Container>
    </div>
  );
}
