import { BlogPost } from "@/app/blog/[slug]/page";
import { getBlogs } from "@/utils/mdx";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  return (
    <div className="">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love writing thigs down.
      </p>
      <div className="flex flex-col gap-10 pt-4">
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
    </div>
  );
};
