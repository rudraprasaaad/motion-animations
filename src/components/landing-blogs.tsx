import { BlogPost } from "@/app/blog/[slug]/page";
import { SubHeading } from "@/components/subheading";
import { getBlogs } from "@/utils/mdx";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  return (
    <div className="">
      <SubHeading>I love writing thigs down.</SubHeading>
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
