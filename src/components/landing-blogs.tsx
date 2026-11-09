import { BlogPost } from "@/app/blog/[slug]/page";
import { getBlogs } from "@/utils/mdx";
import { SectionHeading } from "./section-heading";
import { MotionDiv } from "./motion-div";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  return (
    <div>
      <SectionHeading className="pb-4" delay={0.4}>
        I love writing thigs down.
      </SectionHeading>
      <div className="flex flex-col gap-10 pt-4">
        {allBlogs.map(
          (blog, idx) =>
            blog.frontmatter && (
              <MotionDiv
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.1,
                }}
                key={blog.slug}
              >
                <BlogPost
                  slug={blog.slug}
                  frontmatter={blog.frontmatter}
                  showImage={false}
                />
              </MotionDiv>
            ),
        )}
      </div>
    </div>
  );
};
